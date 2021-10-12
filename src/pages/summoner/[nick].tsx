import { GetServerSideProps } from "next"
import { NextSeo } from "next-seo"
import { api } from "services/riot"
import { SummonerTemplate } from "templates/Summoner"
import { ISummonerProps } from "types/summoner"
import { CalcWinrate } from "utils/CalcWinrate"
import { FormatRank } from "utils/FormatRank"

export default function Summoner({ summoner }: ISummonerProps) {
  return (
    <>
      <NextSeo
        title={summoner.nick}
        description={`Explore informações sobre ${summoner.nick}, como histórico, maestrias, elo, e muito mais! 🤗`}
        canonical={`https://fiora.vercel.app/summoner/${summoner.nick}`}
        openGraph={{
          url: `https://fiora.vercel.app/summoner/${summoner.nick}`,
          title: summoner.nick,
          description: `Explore informações sobre ${summoner.nick}, como histórico, maestrias, elo, e muito mais! 🤗`,
          images: [
            {
              url: summoner.splash_art,
              width: 1280,
              height: 720,
              alt: summoner.nick
            }
          ]
        }}
      />
      <SummonerTemplate summoner={summoner} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const nick = (ctx.query.nick as String).toLowerCase()

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

    const { data: dataRank } = await api.get(
      `/league/v4/entries/by-summoner/${dataSummoner.id}`
    )

    const ranks = dataRank.map((rank: any) => {
      return {
        queue: rank.queueType,
        tier: rank.tier.toLowerCase(),
        rank: FormatRank(rank.rank),
        wins: rank.wins,
        losses: rank.losses,
        hotStreak: rank.hotStreak,
        lps: rank.leaguePoints,
        winrate: CalcWinrate(rank.wins, rank.losses)
      }
    })
    console.log(ranks)

    const summoner = {
      id: dataSummoner.id,
      nick: dataSummoner.name,
      level: dataSummoner.summonerLevel,
      icon: `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${dataSummoner.profileIconId}.png`,
      masteries,
      ranks
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
