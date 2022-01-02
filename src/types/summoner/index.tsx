import { FormatMatch } from "../../utils/summoner/FormatMatch"

export type ISummonerProps = {
  summoner: {
    id: string
    puuid: string
    accountId: string
    nick: string
    level: string
    icon: string
  }
  matchHistory: Array<ReturnType<typeof FormatMatch>>
}
