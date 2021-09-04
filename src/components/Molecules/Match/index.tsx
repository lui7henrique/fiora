import { ImageWrapper } from "components/Atoms/ImageWrapper"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
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
  const { query } = useRouter()
  const principalPlayerNick = query.nick

  const { participantId: principalPlayerId } =
    match.participantIdentities.filter(
      (participantIdentity) =>
        participantIdentity.player.summonerName.toLowerCase() ===
        principalPlayerNick
    )[0]

  const principalPlayer = match.participants.filter(
    (participant) => participant.participantId === principalPlayerId
  )[0]

  const kda = `${principalPlayer.stats.kills} / ${principalPlayer.stats.deaths} / ${principalPlayer.stats.assists}`

  const build = []
  build.push(principalPlayer.stats.item0)
  build.push(principalPlayer.stats.item1)
  build.push(principalPlayer.stats.item2)
  build.push(principalPlayer.stats.item3)
  build.push(principalPlayer.stats.item4)
  build.push(principalPlayer.stats.item5)
  build.push(principalPlayer.stats.item6)

  return (
    <S.Container>
      <ImageWrapper size={40} icon={match.champion_icon} />
      <S.Spells>
        <Image
          src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/summoner${FormatSpell(
            principalPlayer.spell1Id
          )}.png`}
          width={17}
          height={17}
          alt={String(principalPlayer.spell1Id)}
        />
        <Image
          src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/summoner${FormatSpell(
            principalPlayer.spell2Id
          )}.png`}
          width={17}
          height={17}
          alt={String(principalPlayer.spell2Id)}
        />
      </S.Spells>
      <S.Infos>
        <h5 className={`${principalPlayer.stats.win ? "win" : "defeat"}`}>
          {principalPlayer.stats.win ? "Vitória" : "Derrota"}
        </h5>
        <S.Times>
          <sub>{FormatSecondsToMinutes(match.duration)}</sub>
          <sub>{TimestampConverter(match.timestamp)}</sub>
        </S.Times>
        <S.KDA>{kda}</S.KDA>
      </S.Infos>

      <S.BuildTeams>
        <Build build={build} />
        <Teams />
      </S.BuildTeams>
    </S.Container>
  )
}
