import { ImageWrapper } from "components/Atoms/ImageWrapper"
import Link from "next/link"

import * as S from "./styles"

interface ITeamsProps {
  team1: Team[]
  team2: Team[]
  principalPlayerId: number
}

type Team = {
  championId: number
  championIcon: string
  participantId: number
  nick: string
}

export function Teams({ team1, team2, principalPlayerId }: ITeamsProps) {
  return (
    <S.Container className="teams">
      <S.Team className="team1">
        {team1.map((participant) => {
          return (
            <S.Participant key={participant.participantId}>
              <Link href={`/summoner/${participant.nick}`}>
                <a>
                  <ImageWrapper icon={participant.championIcon} size={15} />
                  <p
                    className={`${
                      participant.participantId === principalPlayerId &&
                      "principalPlayer"
                    }`}
                  >
                    {participant.nick}
                  </p>
                </a>
              </Link>
            </S.Participant>
          )
        })}
      </S.Team>
      <S.Team>
        {team2.map((participant) => {
          return (
            <S.Participant key={participant.participantId}>
              <Link href={`/summoner/${participant.nick}`}>
                <a>
                  <ImageWrapper icon={participant.championIcon} size={15} />
                  <p
                    className={`${
                      participant.participantId === principalPlayerId &&
                      "principalPlayer"
                    }`}
                  >
                    {participant.nick}
                  </p>
                </a>
              </Link>
            </S.Participant>
          )
        })}
      </S.Team>
    </S.Container>
  )
}
