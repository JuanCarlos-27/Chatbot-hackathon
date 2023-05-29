import axios from 'axios'
import { experienceParameters, subcategoriesParameters, teleworkingParameters } from './infoJobsKeys.js'
import dotend from 'dotenv'
dotend.config()

const INFOJOBS_TOKEN = process.env.INFOJOBS_TOKEN
const URL_BASE = 'https://api.infojobs.net/api/9/offer'

export async function getInfoJobsOffers (minSalary, experienceMin, teleworking, subcategory) {
  const keySubcategory = subcategoriesParameters[subcategory] ?? 'otros'
  const keyExperienceMin = experienceParameters[experienceMin] ?? 'mas-de-10-anos'
  const keySalaryMin = Math.abs(minSalary)
  const keyteleworking = teleworkingParameters[teleworking] ?? 'no-se-sabe-no-esta-decidido'
  // const keyCategory = categoryParameters[category] ?? 'otros'

  const URL = `${URL_BASE}?minSalary=${keySalaryMin}&experienceMin=${keyExperienceMin}&teleworking=${keyteleworking}&subcategory=${keySubcategory}`

  const response = await axios.get(URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_TOKEN}`
    }
  })

  const offers = response?.data?.items.map(item => {
    return {
      id: item?.id,
      title: item?.title,
      city: item?.city,
      link: item?.link,
      category: item?.category?.value,
      subcategory: item?.subcategory?.value,
      salary: item.salaryDescription,
      teleworking: item?.teleworking?.value ?? 'No definido'
    }
  })
  return offers
}
