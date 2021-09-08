/* eslint-disable react-hooks/exhaustive-deps */
import { ItemsList } from "components/Molecules/ItemsList"
import React, { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Item, Tree } from "types/itens"

import * as S from "./styles"

interface IItensTemplateProps {
  items: Item[]
  tree: Tree[]
}

export function ItensTemplate({ items, tree }: IItensTemplateProps) {
  const [currentItems, setItems] = useState(items.slice(0, 80))
  const [hasMore, setHasMore] = useState(true)

  const getMoreItems = async () => {
    if (currentItems.length >= items.length) {
      setHasMore(false)
    } else {
      const newItems = items.slice(
        currentItems.length,
        currentItems.length + 80
      )
      setItems((currentItems) => [...currentItems, ...newItems])
    }
  }

  return (
    <S.Container>
      <S.Filters>
        <h1>Filtros</h1>
      </S.Filters>
      <S.List>
        <InfiniteScroll
          dataLength={currentItems.length}
          next={getMoreItems}
          hasMore={hasMore}
          loader={<></>}
        >
          <ItemsList items={currentItems} />
        </InfiniteScroll>
      </S.List>
    </S.Container>
  )
}
