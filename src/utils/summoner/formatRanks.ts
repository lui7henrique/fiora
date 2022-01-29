import { UnformattedRank } from "types/summoner"

export const formatRanks = (ranks: UnformattedRank[]) => {
  const formattedRanks = ranks.map((rank) => {
    const totalOfMatches = rank.wins + rank.losses
    const winRate = (rank.wins / totalOfMatches) * 100

    const formatQueueType: {
      [key: string]: string
    } = {
      RANKED_FLEX_SR: "Ranqueada Flexível",
      RANKED_TFT_PAIRS: "Ranqueada TFT",
      RANKED_SOLO_5x5: "Ranqueada Solo/Duo"
    }

    const formatTier: {
      [key: string]: string
    } = {
      CHALLENGER: "Desafiante",
      GRANDMASTER: "Grão-mestre",
      MASTER: "Mestre",
      DIAMOND: "Diamante",
      PLATINUM: "Platina",
      GOLD: "Ouro",
      SILVER: "Prata",
      BRONZE: "Bronze",
      IRON: "Ferro"
    }

    console.log(rank)

    return {
      ...rank,
      queueType: formatQueueType[rank.queueType] || rank.queueType,
      tier: formatTier[rank.tier] || "Sem elo",
      rank: ["CHALLENGER", "GRANDMASTER", "MASTER"].includes(rank.tier)
        ? null
        : rank.rank || null,
      winrate: `${winRate.toFixed(2)}%`,
      icon: rank.tier
        ? `/icons/ranks/ranked-mini-regalia/${rank.tier.toLowerCase()}.png`
        : `/icons/ranks/ranked-mini-regalia/unranked.png`
    }
  })

  return formattedRanks
}
