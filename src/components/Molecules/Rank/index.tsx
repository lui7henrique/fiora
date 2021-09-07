import { Progress } from "components/Atoms/ProgressCircle"
import { FormatTier } from "utils/FormatTier"

import { Rank as RankType } from "../../../types/summoner/index"
import * as S from "./styles"

interface IRankProps {
  rank: RankType
}

export function Rank({ rank }: IRankProps) {
  return (
    <S.Container>
      <Progress rank={rank.rank} tier={rank.tier} lps={rank.lps} />
      <S.Infos>
        <S.TierRankLps tier={rank.tier}>
          <h5>
            {FormatTier(rank.tier)}{" "}
            {rank.tier !== "grandmaster" &&
              rank.tier !== "master" &&
              rank.tier !== "challenger" &&
              rank.rank}
          </h5>
        </S.TierRankLps>
        <S.WinLosses>
          <span>{rank.wins} vitórias</span>
          <span>{rank.losses} derrotas</span>
        </S.WinLosses>
        <S.Winrate>
          <span className={`${rank.winrate >= 50 ? "positive" : "negative"}`}>
            {rank.winrate}% winrate
          </span>
        </S.Winrate>
      </S.Infos>
    </S.Container>
  )
}
