import { ChampionTemplate } from "templates/Champion"
import { ChampionType } from "types/champion"

type IChampionProps = {
  champion: ChampionType
}

export default function Champion({ champion }: IChampionProps) {
  return <ChampionTemplate champion={champion} />
}

export async function getStaticProps({ params }: any) {
  const { id } = params
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/11.13.1/data/pt_BR/champion/${id}.json`
  ).then((res) => res.json())

  const data: any = Object.values(res.data)[0]

  const champion = {
    id: data.id,
    key: data.key,
    name: data.name,
    title: data.title,
    lore: data.lore,
    allytips: data.allytips,
    enemytips: data.enemytips,
    tags: data.tags,
    info: data.info,
    stats: data.stats,
    icon: `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${data.id}.png`,
    splash_art_full: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.name}_0.jpg`,
    splash_art_cropped: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${data.key}/${data.key}000.jpg`,
    skins: data.skins.map((skin: any) => {
      return {
        id: skin.id,
        num: skin.num,
        name: skin.name === "default" ? "Padrão" : skin.name,
        image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_${skin.num}.jpg`
      }
    }),
    spells: data.spells.map((spell: any) => {
      return {
        id: spell.id,
        name: spell.name,
        description: spell.description,
        image: `http://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${spell.image.full}`
      }
    }),
    passive: {
      name: data.passive.name,
      description: data.passive.description,
      image: `http://ddragon.leagueoflegends.com/cdn/11.13.1/img/passive/${data.passive.image.full}`
    }
  }

  console.log(data, champion.spells[0].image)

  return {
    props: {
      champion
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export async function getStaticPaths() {
  const res = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json"
  )
  const { data } = await res.json()
  const champions = Object.keys(data)

  const paths = champions.map((champion) => ({
    params: { id: champion }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}
