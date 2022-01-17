import { formatDistance } from "date-fns"
import pt from "date-fns/locale/pt"
import { UnformattedMastery } from "types/summoner"
import { getChampionNameById } from "utils/champion/getChampionById"

export const formatMasteries = (masteries: UnformattedMastery[]) => {
  const formattedMasteries = masteries.map((mastery) => {
    const { championId, lastPlayTime } = mastery

    const lastPlay = formatDistance(new Date(), new Date(lastPlayTime), {
      locale: pt
    }).replace("aproximadamente", "")

    return {
      champion_tile: `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${championId}/${championId}000.jpg`,
      icon: `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`,
      splash_art_cropped: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${championId}/${championId}000.jpg`,
      championName: getChampionNameById(championId),
      lastPlay: lastPlay,
      ...mastery
    }
  })

  return formattedMasteries
}
