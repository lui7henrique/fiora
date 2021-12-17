import { GetServerSideProps } from "next"
import { NextSeo } from "next-seo"
import { api } from "services/riot"
import { SummonerTemplate } from "templates/Summoner"
import { ISummonerProps } from "types/summoner"

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
              url: "https://picsum.photos/1920/1080",
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

  try {
    const { data: dataSummoner } = await api.get(
      `/summoner/v4/summoners/by-name/${nick}`
    )

    const summoner = {
      id: dataSummoner.id,
      nick: dataSummoner.name,
      level: dataSummoner.summonerLevel,
      icon: `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${dataSummoner.profileIconId}.png`
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
