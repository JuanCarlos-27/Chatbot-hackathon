import dotend from 'dotenv'
import fs from 'fs'
dotend.config()
const url = 'https://api.infojobs.net/api/1/dictionary/subcategory'
const INFOJOBS_TOKEN = process.env.INFOJOBS_TOKEN

async function getSubcategories () {
  const response = await fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_TOKEN}`
    }
  })
  const data = await response.json()

  const results = data.slice(19).map(item => {
    return {
      value: item.value,
      synonyms: [
        item.value
      ]
    }
  })

  return results
}

const jsonToSave = await getSubcategories()

fs.writeFile('src/subcategories.json', JSON.stringify(jsonToSave), 'utf8', (err) => {
  if (err) console.log('ERROR saving file')
  else console.log('File SAVED!')
})
