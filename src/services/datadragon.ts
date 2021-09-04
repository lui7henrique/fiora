import axios from "axios"

export const datadragon = axios.create({
  baseURL: "http://ddragon.leagueoflegends.com/cdn/11.17.1/data/pt_BR/"
})
