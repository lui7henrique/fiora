import { ImageWrapper } from "components/Atoms/ImageWrapper"
import { Match as MatchType } from "types/summoner"

import * as S from "./styles"

interface IMatchProps {
  match: MatchType
}

export function Match({ match }: IMatchProps) {
  return (
    <S.Container>
      <ImageWrapper size={50} icon={match.champion_icon} isMatch />
      <p>Win</p>
    </S.Container>
  )
}
