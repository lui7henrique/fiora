import axios from "axios"

export const merakianalytics = axios.create({
  baseURL: "https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US"
})
