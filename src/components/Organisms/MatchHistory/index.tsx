import format from "date-fns/format"
import pt from "date-fns/locale/pt"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import { americas } from "services/americas"
import { ISummonerProps } from "types/summoner"
import { FormatSecondsToMinutes } from "utils/FormatSecondsToMinutes"
import { calcAMA } from "utils/summoner/CalcAMA"
import { FormatMatch } from "utils/summoner/FormatMatch"
import { v4 } from "uuid"

import * as S from "./styles"

type MatchHistoryProps = {
  summoner: ISummonerProps["summoner"]
} & Pick<ISummonerProps, "matchHistory">

type MatchProps = {
  match: MatchHistoryProps["matchHistory"][0]
}

const Match = ({ match }: MatchProps) => {
  const team1 = match.participants.filter(
    (participant) => participant.teamId === 100
  )

  const team2 = match.participants.filter(
    (participant) => participant.teamId === 200
  )

  return (
    <S.Match win={match.win} href={`match/${match.id}`}>
      <S.ChampionIcon>
        <S.ChampionImage
          src={match.mainSummoner.champion.splash_art_cropped}
          alt={match.mainSummoner.champion.name}
          layout={"fill"}
        />
      </S.ChampionIcon>
      <S.Infos>
        <S.MatchInfo>
          <S.Win win={match.win}>{match.win ? "Vitória" : "Derrota"}</S.Win>

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
            <S.MatchCreationMinimal>
              {format(match.creation, "dd/MM/yyyy")}
            </S.MatchCreationMinimal>
          </S.MatchTime>

          <S.SummonerStats>
            <S.KDA>{match.mainSummoner.kda}</S.KDA>
            <S.Divisor>-</S.Divisor>
            <S.AMA AMA={calcAMA(match.mainSummoner.kda)}>
              {calcAMA(match.mainSummoner.kda)}
            </S.AMA>
          </S.SummonerStats>
        </S.MatchInfo>

        <S.Teams>
          <S.Team>
            {team1.map((participant) => {
              const isMainSummoner =
                participant.summoner.name === match.mainSummoner.summoner.name
              return (
                <S.Participant
                  target="blank"
                  href={`/summoner/${participant.summoner.name}`}
                  key={v4()}
                >
                  <S.ParticipantIconWrapper isMainSummoner={isMainSummoner}>
                    <S.ParticipantIcon
                      src={participant.champion.icon}
                      layout="fill"
                    />
                  </S.ParticipantIconWrapper>
                  <S.ParticipantNickname isMainSummoner={isMainSummoner}>
                    {participant.summoner.name}
                  </S.ParticipantNickname>
                </S.Participant>
              )
            })}
          </S.Team>
          <S.Team>
            {team2.map((participant) => {
              const isMainSummoner =
                participant.summoner.name === match.mainSummoner.summoner.name
              return (
                <S.Participant
                  target="blank"
                  href={`/summoner/${participant.summoner.name}`}
                  key={v4()}
                >
                  <S.ParticipantIconWrapper isMainSummoner={isMainSummoner}>
                    <S.ParticipantIcon
                      src={participant.champion.icon}
                      layout="fill"
                    />
                  </S.ParticipantIconWrapper>
                  <S.ParticipantNickname isMainSummoner={isMainSummoner}>
                    {participant.summoner.name}
                  </S.ParticipantNickname>
                </S.Participant>
              )
            })}
          </S.Team>
        </S.Teams>
      </S.Infos>
    </S.Match>
  )
}

export const MatchHistory = ({
  summoner,
  matchHistory: initialMatchHistory
}: MatchHistoryProps) => {
  const [matchHistory, setMatchHistory] = useState(initialMatchHistory)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = async () => {
    try {
      const { data: dataMatch } = await americas.get<Array<string>>(
        `/match/v5/matches/by-puuid/${summoner.puuid}/ids`,
        {
          params: {
            start: matchHistory.length,
            count: 10
          }
        }
      )

      const newMatchHistory = await Promise.all(
        dataMatch.map(async (match) => {
          const { data } = await americas.get(`/match/v5/matches/${match}`)
          return FormatMatch(summoner.nick, data)
        })
      )

      setMatchHistory([...matchHistory, ...newMatchHistory])
    } catch (err) {
      setHasMore(false)
    }
  }

  return (
    <>
      <InfiniteScroll
        dataLength={matchHistory.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<S.Loading>Carregando...</S.Loading>}
      >
        <S.Container>
          {matchHistory.map((match) => {
            return <Match key={match.id} match={match} />
          })}
        </S.Container>
      </InfiniteScroll>
    </>
  )
}
