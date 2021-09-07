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
  const [currentItems, setItems] = useState(items.slice(0, 20))
  const [hasMore, setHasMore] = useState(true)

  const getMoreItems = async () => {
    if (currentItems.length >= items.length) {
      setHasMore(false)
    } else {
      const newItems = items.slice(
        currentItems.length,
        currentItems.length + 20
      )
      setItems((currentItems) => [...currentItems, ...newItems])
    }
  }

  return (
    <S.Container>
      <InfiniteScroll
        dataLength={currentItems.length}
        next={getMoreItems}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ItemsList items={currentItems} />
      </InfiniteScroll>
    </S.Container>
  )
}
