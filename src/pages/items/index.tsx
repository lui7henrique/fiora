import { GetStaticProps } from "next"
import { datadragon } from "services/datadragon"
import { ItensTemplate } from "templates/Items"
import { Tree, Item } from "types/itens"

interface IItensProps {
  items: Item[]
  tree: Tree[]
}

export default function Items({ items, tree }: IItensProps) {
  return <ItensTemplate items={items} tree={tree} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await datadragon.get("item.json")

  const items = Object.values(data.data)
    .filter((item: any) => item.maps[11] === true || item.maps[12] === true)
    .map((item: any) => {
      return {
        name: item.name,
        description: item.description,
        plaintext: item.plaintext,
        gold: item.gold,
        tags: item.tags,
        maps: [{ 11: item.maps[11] }, { 12: item.maps[12] }],
        stats: item.stats,
        image: `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/${item.image.full}`
      }
    })

  const tree = data.tree

  console.log(items)

  return {
    props: {
      items,
      tree
    },
    revalidate: 60 * 60 * 24 * 30 * 3 // 3 months
  }
}
