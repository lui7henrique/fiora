/* eslint-disable react-hooks/exhaustive-deps */
import { Filter } from "@styled-icons/boxicons-regular"
import Checkbox from "components/Atoms/Checkbox"
import { ItemsList } from "components/Molecules/ItemsList"
import { Item, Tree } from "types/itens"
import { FormatCategoryHeader } from "utils/FormatCategoryHeader"
import { FormatTag } from "utils/FormatTag"

import * as S from "./styles"

interface IItensTemplateProps {
  items: Item[]
  tree: Tree[]
}

export function ItensTemplate({ items, tree }: IItensTemplateProps) {
  // const [currentItems, setItems] = useState(items.slice(0, 80))
  // const [hasMore, setHasMore] = useState(true)
  // const [tags, setTags] = useState(["all"])

  // const getMoreItems = async () => {
  //   if (currentItems.length >= items.length) {
  //     setHasMore(false)
  //   } else {
  //     const newItems = items.slice(
  //       currentItems.length,
  //       currentItems.length + 80
  //     )
  //     setItems((currentItems) => [...currentItems, ...newItems])
  //   }
  // }

  return (
    <S.Container>
      <S.Filters>
        <h1>
          <Filter size={40} />
          Filtros
        </h1>
        {tree.map((category, index) => {
          return (
            <S.Category key={index}>
              <h3>{FormatCategoryHeader(category.header)}</h3>
              {category.tags.map((tag) => {
                return (
                  <Checkbox
                    key={tag}
                    label={FormatTag(tag)}
                    value={tag}
                    onClick={() => console.log(tag)}
                  />
                )
              })}
            </S.Category>
          )
        })}
      </S.Filters>
      <S.List>
        {/* <InfiniteScroll
          dataLength={currentItems.length}
          next={getMoreItems}
          hasMore={hasMore}
          loader={<></>}
        > */}
        <ItemsList items={items} />
        {/* </InfiniteScroll> */}
      </S.List>
    </S.Container>
  )
}
