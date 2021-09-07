import Image from "next/image"
import { Item } from "types/itens"

import * as S from "./styles"

interface IItemsListProps {
  items: Item[]
}
export function ItemsList({ items }: IItemsListProps) {
  return (
    <S.Container>
      {items.map((item, index) => {
        return (
          <>
            <Image src={item.image} alt={item.name} width={48} height={48} />
            <p key={`${index}-${item.name}`}>{item.name}</p>
          </>
        )
      })}
    </S.Container>
  )
}
