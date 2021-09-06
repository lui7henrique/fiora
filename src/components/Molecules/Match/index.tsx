import { ImageWrapper } from "components/Atoms/ImageWrapper"
import Image from "next/image"
import Link from "next/link"
import { Match as MatchType } from "types/summoner"
import { FormatSecondsToMinutes } from "utils/FormatSecondsToMinutes"
import { FormatSpell } from "utils/FormatSpell"
import { TimestampConverter } from "utils/FormatTimestamp"

import { Build } from "../Build"
import { Teams } from "../Teams"
import * as S from "./styles"

interface IMatchProps {
  match: MatchType
}

export function Match({ match }: IMatchProps) {
  console.log(match.principalPlayer.spell1Id)
  return (
    <Link href={`/match/${match.id}`}>
      <a>
        <S.Container>
          <ImageWrapper size={40} icon={match.champion_icon} />
          <S.Spells>
            <Image
              src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/summoner${FormatSpell(
                match.principalPlayer.spell1Id
              )}.png`}
              width={17}
              height={17}
              alt={String(match.principalPlayer.spell1Id)}
            />
            <Image
              src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/summoner${FormatSpell(
                match.principalPlayer.spell2Id
              )}.png`}
              width={17}
              height={17}
              alt={String(match.principalPlayer.spell2Id)}
            />
          </S.Spells>
          <S.Infos>
            <h5
              className={`${
                match.principalPlayer.stats.win ? "win" : "defeat"
              }`}
            >
              {match.principalPlayer.stats.win ? "Vitória" : "Derrota"}
            </h5>
            <S.Times>
              <sub>{FormatSecondsToMinutes(match.duration)}</sub>
              <sub>{TimestampConverter(match.timestamp)}</sub>
            </S.Times>
            <S.KDA>{match.kda}</S.KDA>
          </S.Infos>

          <S.BuildTeams>
            <Build build={match.build} />
            <Teams
              team1={match.team1}
              team2={match.team2}
              principalPlayerId={match.principalPlayer.participantId}
            />
          </S.BuildTeams>
        </S.Container>
      </a>
    </Link>
  )
}
