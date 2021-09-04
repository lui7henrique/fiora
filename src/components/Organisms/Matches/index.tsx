import { Match as MatchType } from "types/summoner"

import { Match } from "../../Molecules/Match"
import * as S from "./styles"

interface IMatchesProps {
  matches: MatchType[]
}

export function Matches({ matches }: IMatchesProps) {
  return (
    <S.Container>
      {matches.map((match) => {
        return <Match match={match} key={match.id} />
      })}
    </S.Container>
  )
}
