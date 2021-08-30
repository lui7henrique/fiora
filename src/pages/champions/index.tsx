import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"

import { ChampionsTemplate } from "../../templates/Champions/index"

export type IChampionsProps = {
  champions: ChampionType[]
}

export type ChampionType = {
  key: number
  id: string
  name: string
  title: string
  blurb: string
  partype: string
  icon: string
  category: string[]
  splash_art_full: string
  splash_art_cropped: string
  stats: {
    armor: number
    armorperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackrange: number
    attackspeed: number
    attackspeedperlevel: number
    crit: number
    critperlevel: number
    hp: number
    hpperlevel: number
    movespeed: number
  }
}

export default function Champions({ champions }: IChampionsProps) {
  return (
    <>
      <NextSeo
        title="Fiora | Campeões"
        description="Com mais de 140 Campeões à disposição, sempre há coisas novas para aperfeiçoar. Dê uma olhada em todos eles aqui."
        canonical="https://fiora.vercel.app"
        openGraph={{
          url: "https://fiora.vercel.app",
          title: "Fiora | Campeões",
          description:
            "Com mais de 140 Campeões à disposição, sempre há coisas novas para aperfeiçoar. Dê uma olhada em todos eles aqui.",
          images: [
            {
              url: "https://fiora.vercel.app/img/champions.png",
              width: 1280,
              height: 720,
              alt: "Página de campeões"
            }
          ]
        }}
      />
      <ChampionsTemplate champions={champions} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.13.1/data/pt_BR/champion.json"
  ).then((res) => res.json())
  const data = Object.values(res.data)

  const champions = data.map((champion: any) => {
    return {
      key: champion.key,
      id: champion.id,
      name: champion.name,
      title: champion.title,
      blurb: champion.blurb,
      partype: champion.partype,
      category: champion.tags,
      info: champion.info,
      icon: `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion.name}.png`,
      splash_art_full: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`,
      splash_art_cropped: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${champion.key}/${champion.key}000.jpg`,
      stats: {
        armor: champion.stats.armor,
        armorperlevel: champion.stats.armorperlevel,
        attackdamage: champion.stats.attackdamage,
        attackdamageperlevel: champion.stats.attackdamageperlevel,
        attackrange: champion.stats.attackrange,
        attackspeed: champion.stats.attackspeed,
        attackspeedperlevel: champion.stats.attackspeedperlevel,
        crit: champion.stats.crit,
        critperlevel: champion.stats.critperlevel,
        hp: champion.stats.hp,
        hpperlevel: champion.stats.hpperlevel,
        movespeed: champion.stats.movespeed
      }
    }
  })

  return {
    props: {
      data,
      champions
    },
    revalidate: 60 * 60 * 24 * 30 // 1 month
  }
}
