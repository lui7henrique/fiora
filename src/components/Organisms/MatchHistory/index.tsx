import format from "date-fns/format"
import pt from "date-fns/locale/pt"
import { ISummonerProps } from "types/summoner"
import { FormatSecondsToMinutes } from "utils/FormatSecondsToMinutes"

import * as S from "./styles"

type MatchHistoryProps = Pick<ISummonerProps, "matchHistory">

type MatchProps = {
  match: MatchHistoryProps["matchHistory"][0]
}

const Match = ({ match }: MatchProps) => {
  console.log(match.duration)
  return (
    <S.Match win={match.win}>
      <S.ChampionIcon>
        <S.ChampionImage
          src={match.mainSummoner.champion.image}
          alt={match.mainSummoner.champion.name}
          layout={"fill"}
        />
      </S.ChampionIcon>
      <S.MatchInfo>
        <S.MatchTime>
          <S.MatchDuration>
            {FormatSecondsToMinutes(match.duration)}
          </S.MatchDuration>
          <S.Divisor>•</S.Divisor>
          <S.MatchCreation>
            {format(match.creation, "dd 'de' MMMM 'de' yyyy", {
              locale: pt
            })}
          </S.MatchCreation>
        </S.MatchTime>
      </S.MatchInfo>
    </S.Match>
  )
}

export const MatchHistory = ({ matchHistory }: MatchHistoryProps) => {
  return (
    <S.Container>
      {matchHistory.map((match) => {
        return <Match key={match.id} match={match} />
      })}
    </S.Container>
  )
}
