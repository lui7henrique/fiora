import axios from "axios"

const version = "11.17.1"

export const datadragon = axios.create({
  baseURL: `http://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR`
})
