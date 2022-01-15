// full response https://developer.riotgames.com/apis#match-v5/GET_getMatch

import { Match } from "types/match"

export function FormatSummonerInfos(
  summonerInfos: Match["info"]["participants"][0]
) {
  const formattedSummonerInfos = {
    summoner: {
      id: summonerInfos.summonerId,
      name: summonerInfos.summonerName,
      icon: `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${summonerInfos.profileIcon}.png`
    },
    kda: `${summonerInfos.kills}/${summonerInfos.deaths}/${summonerInfos.assists}`,
    champion: {
      id: summonerInfos.championId,
      name: summonerInfos.championName,
      tile: `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${summonerInfos.championId}/${summonerInfos.championId}000.jpg`,
      icon: `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${summonerInfos.championId}.png`,
      splash_art_cropped: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${summonerInfos.championId}/${summonerInfos.championId}000.jpg`,
      level: summonerInfos.champLevel
    },
    build: [
      summonerInfos.item0,
      summonerInfos.item1,
      summonerInfos.item2,
      summonerInfos.item3,
      summonerInfos.item4,
      summonerInfos.item5,
      summonerInfos.item6
    ],
    teamId: summonerInfos.teamId
  }

  return formattedSummonerInfos
}
