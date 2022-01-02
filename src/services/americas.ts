import axios from "axios"

export const americas = axios.create({
  baseURL: "https://americas.api.riotgames.com/lol",
  params: {
    api_key: process.env.NEXT_PUBLIC_RIOT_API_KEY
  }
})
