import { SessionsClient } from '@google-cloud/dialogflow'
import { getInfoJobsOffers } from './offersJob.js'
import dotend from 'dotenv'
dotend.config()

const sessionClient = new SessionsClient({
  projectId: process.env.PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY.split(String.raw`\n`).join('\n')
  }
})
async function detectIntent (message, context, sessionId) {
  const projectId = process.env.PROJECT_ID
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId)

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'es'
      }
    }
  }

  if (context && context.length > 0) {
    request.queryParams = {
      contexts: context
    }
  }
  const responses = await sessionClient.detectIntent(request)
  return responses[0]
}

async function executeQueries (query, sessionId) {
  // Keeping the context across queries let's us simulate an ongoing conversation with the bot
  let context
  try {
    const intentResponse = await detectIntent(query, context, sessionId)
    const botResponses = intentResponse.queryResult.fulfillmentMessages.map(item => item.text.text[0])

    const responseStructure = {
      text: botResponses
    }
    const richText = intentResponse?.queryResult?.fulfillmentMessages[1]?.payload?.fields?.richContent?.listValue?.values[0]?.listValue?.values[0]?.structValue?.fields?.options?.listValue?.values

    if (richText) {
      responseStructure.richText = richText.map(item => item?.structValue?.fields?.text?.stringValue)
    }

    const isEndInteraction = intentResponse?.queryResult?.intent?.endInteraction

    if (isEndInteraction) {
      responseStructure.endInteraction = isEndInteraction
      const { minSalary, NumberExperience, TeleworkingOptions, JobPosition } = intentResponse.queryResult.outputContexts.at(-1).parameters.fields
      const modalityWork = TeleworkingOptions.stringValue ?? TeleworkingOptions?.listValue?.values[0]?.stringValue

      const filteredOffers = await getInfoJobsOffers(minSalary.numberValue, NumberExperience.numberValue, modalityWork, JobPosition.stringValue)
      responseStructure.offers = filteredOffers
    }
    // Use the context from this response for next queries
    context = intentResponse.queryResult.outputContexts
    return responseStructure
  } catch (error) {
    console.log(error)
  }
}
export { executeQueries }
