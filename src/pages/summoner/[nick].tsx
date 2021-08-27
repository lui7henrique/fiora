import { GetServerSideProps } from "next"
import { api } from "services/api"
import { SummonerTemplate } from "templates/Summoner"

export type ISummonerProps = {
  summoner: {
    id: number
    accountId: string
    puuid: string
    nick: string
    icon: string
    level: number
    matches: {
      id: number
      champion_id: number
      champion_icon: string
      queue: number
      timestamp: number
      duration: number
      lane: string
      teams: any
      participants: any
      participantIdentities: any
    }[]
  }
}

export default function Summoner({ summoner }: ISummonerProps) {
  return <SummonerTemplate summoner={summoner} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const nick = (ctx.query.nick as String).toLowerCase()
  const champion = ctx.query.champion

  try {
    // to get the summoner's information
    const { data: dataSummoner } = await api.get(
      `/summoner/v4/summoners/by-name/${nick}`
    )

    // to get match history, with id, champion, etc.
    const { data: matchHistory } = await api.get(
      `/match/v4/matchlists/by-account/${dataSummoner.accountId}`,
      {
        params: {
          champion: champion
        }
      }
    )

    // to get match informations, with teams, spells, enemies, ally and etc.
    const matches = await Promise.all(
      matchHistory.matches.slice(0, 20).map(async (match: any) => {
        const { data: Match } = await api.get(
          `match/v4/matches/${match.gameId}`
        )
        const { data: Timeline } = await api.get(
          `match/v4/timelines/by-match/${match.gameId}`
        )

        return {
          id: match.gameId,
          champion_id: match.champion,
          champion_icon: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${match.champion}.png`,
          queue: match.queue,
          timestamp: match.timestamp,
          duration: Match.gameDuration,
          lane: match.lane,
          teams: Match.teams,
          participants: Match.participants,
          participantIdentities: Match.participantIdentities,
          timeline: Timeline
        }
      })
    )

    const summoner = {
      id: dataSummoner.id,
      accountId: dataSummoner.accountId,
      puuid: dataSummoner.puuid,
      nick: dataSummoner.name,
      icon: `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${dataSummoner.profileIconId}.png`,
      level: dataSummoner.summonerLevel,
      matches: matches
    }

    return {
      props: {
        summoner
      }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      },
      props: {}
    }
  }
}
