// full response https://developer.riotgames.com/apis#match-v5/GET_getMatch

import { Match } from "types/match"

import { FormatSummonerInfos } from "./FormatSummonerInfos"

export function FormatMatch(playerNickname: string, match: Match) {
  const { metadata, info } = match

  const mainSummonerInfos = info.participants.filter(
    (p) => p.summonerName === playerNickname
  )[0]

  const formattedMatch = {
    id: metadata.matchId,
    win: mainSummonerInfos.win,
    duration: info.gameDuration,
    creation: info.gameCreation,
    mainSummoner: FormatSummonerInfos(mainSummonerInfos),
    participants: info.participants.map((p) => FormatSummonerInfos(p))
  }

  return formattedMatch
}
