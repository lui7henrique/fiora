import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"

import { DefaultLayout } from "../../layouts/Default"
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
      <DefaultLayout title="Campeões" description="Campeões">
        <ChampionsTemplate champions={champions} />
      </DefaultLayout>
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
      splash_art_cropped: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${champion.key}/${champion.key}000.jpg`
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
