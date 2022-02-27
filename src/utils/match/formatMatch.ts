import { Match } from "types/match"
import { FormatSummonerInfos } from "utils/summoner/FormatSummonerInfos"

export const formatMatch = (matchInfo: Match["info"]) => {
  const {
    gameCreation,
    gameDuration,
    gameEndTimestamp,
    gameId,
    gameMode,
    gameName,
    gameStartTimestamp,
    gameType,
    gameVersion,
    mapId,
    platformId,
    queueId
  } = matchInfo

  const formattedMatch = {
    gameCreation,
    gameDuration,
    gameEndTimestamp,
    gameId,
    gameMode,
    gameName,
    gameStartTimestamp,
    gameType,
    gameVersion,
    mapId,
    platformId,
    queueId,
    participants: matchInfo.participants.map((participant) => {
      return {
        ...FormatSummonerInfos(participant),
        // fight
        largestKillingSpree: participant.largestKillingSpree,
        largestMultiKill: participant.largestMultiKill,
        firstBlood: participant.firstBloodKill,

        // dmg
        totalDamageDealtToChampions: participant.totalDamageDealtToChampions,
        physicalDamageDealtToChampions:
          participant.physicalDamageDealtToChampions,
        magicDamageDealtToChampions: participant.magicDamageDealtToChampions,
        trueDamageDealtToChampions: participant.trueDamageDealtToChampions,
        totalDamageDealt: participant.totalDamageDealt,
        physicalDamageDealt: participant.physicalDamageDealt,
        magicDamageDealt: participant.magicDamageDealt,
        trueDamageDealt: participant.trueDamageDealt,
        largestCriticalStrike: participant.largestCriticalStrike,
        damageDealtToObjectives: participant.damageDealtToObjectives,
        damageDealtToTurrets: participant.damageDealtToTurrets
      }
    })
  }

  return formattedMatch
}
