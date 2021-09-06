import { Rank } from "components/Molecules/Rank"
import { useState } from "react"
import { Rank as RankType } from "types/summoner"

import * as S from "./styles"

interface IRanksProps {
  ranks: RankType[]
}

export function FormatQueue(queue: string) {
  switch (queue) {
    case "RANKED_SOLO_5x5":
      return "Solo/Duo"
    case "RANKED_FLEX_SR":
      return "Flex"
    default:
      return "Undefined"
  }
}

export function Ranks({ ranks }: IRanksProps) {
  const [activeRank, setActiveRank] = useState(ranks[0])

  console.log(ranks)
  return (
    <S.Container>
      <S.Queues>
        {ranks.map((rank) => {
          return (
            <button
              key={rank.queue}
              onClick={() => setActiveRank(rank)}
              className={`${rank === activeRank && "active"}`}
            >
              {FormatQueue(rank.queue)}
            </button>
          )
        })}
      </S.Queues>
      <Rank rank={activeRank} />
    </S.Container>
  )
}
