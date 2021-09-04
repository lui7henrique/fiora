import { ImageWrapper } from "components/Atoms/ImageWrapper"

import * as S from "./styles"

interface ITeamsProps {
  team1: Team[]
  team2: Team[]
}

type Team = {
  championId: number
  championIcon: string
  participantId: number
  nick: string
}

export function Teams({ team1, team2 }: ITeamsProps) {
  console.log(``)
  return (
    <S.Container className="teams">
      <S.Team className="team1">
        {team1.map((participant) => {
          return (
            <S.Participant key={participant.participantId}>
              <ImageWrapper icon={participant.championIcon} size={15} />
              <p>{participant.nick}</p>
            </S.Participant>
          )
        })}
      </S.Team>
      <S.Team>
        {team2.map((participant) => {
          return (
            <S.Participant key={participant.participantId}>
              <ImageWrapper icon={participant.championIcon} size={15} />
              <p>{participant.nick}</p>
            </S.Participant>
          )
        })}
      </S.Team>
    </S.Container>
  )
}
