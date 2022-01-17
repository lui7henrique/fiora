import axios from "axios"

const version = "11.24.1"

export const datadragon = axios.create({
  baseURL: `http://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR`
})
