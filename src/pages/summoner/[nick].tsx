import { GetServerSideProps } from "next"
import { api } from "services/riot"
import { SummonerTemplate } from "templates/Summoner"
import { ISummonerProps, Match } from "types/summoner"

export default function Summoner({ summoner }: ISummonerProps) {
  return <SummonerTemplate summoner={summoner} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const nick = (ctx.query.nick as String).toLowerCase()
  const champion = ctx.query.champion

  const res = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.13.1/data/pt_BR/champion.json"
  ).then((res) => res.json())
  const data = Object.values(res.data)

  const champions = data.map((champion: any) => {
    return {
      key: +champion.key,
      id: champion.id,
      name: champion.name,
      title: champion.title,
      category: champion.tags,
      icon: `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion.id}.png`
    }
  })

  try {
    // to get the summoner's information
    const { data: dataSummoner } = await api.get(
      `/summoner/v4/summoners/by-name/${nick}`
    )

    const { data: dataMasteries } = await api.get(
      `/champion-mastery/v4/champion-masteries/by-summoner/${dataSummoner.id}`
    )

    const masteries = dataMasteries.map((mastery: any) => {
      const champion = champions.filter(
        (champion: any) => champion.key === mastery.championId
      )[0]

      return champion
        ? {
            key: mastery.championId,
            level: mastery.championLevel,
            points: mastery.championPoints,
            lastPlayTime: mastery.lastPlayTime,
            chestGranted: mastery.chestGranted,
            name: champion.name,
            category: champion.category,
            icon: champion.icon
          }
        : {
            key: 114,
            level: mastery.championLevel,
            points: mastery.championPoints,
            lastPlayTime: mastery.lastPlayTime,
            chestGranted: mastery.chestGranted,
            name: "Akshan",
            category: ["Marksman"],
            icon: "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akshan.png"
          }
    })

    // to get match history, with id, champion, etc.
    const { data: matchHistory } = await api.get(
      `/match/v4/matchlists/by-account/${dataSummoner.accountId}`,
      {
        params: {
          champion: champion,
          limit: 10
        }
      }
    )

    // to get match informations, with teams, spells, enemies, ally and etc.
    const matches: Match[] = await Promise.all(
      matchHistory.matches.slice(0, 10).map(async (match: any) => {
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
      splash_art: `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${matches[0].champion_id}/${matches[0].champion_id}000.jpg`,
      icon: `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${dataSummoner.profileIconId}.png`,
      level: dataSummoner.summonerLevel,
      matches: matches,
      masteries: masteries
    }

    return {
      props: {
        summoner
      }
    }
  } catch (err) {
    console.log(err)
    return {
      redirect: {
        permanent: false,
        destination: "/"
      },
      props: {}
    }
  }
}
