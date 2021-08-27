import axios from "axios"

export const api = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/",
  params: {
    api_key: process.env.NEXT_PUBLIC_RIOT_API_KEY
  }
})
