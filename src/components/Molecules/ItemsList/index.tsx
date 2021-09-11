import Image from "next/image"
import { Item } from "types/itens"

import * as S from "./styles"

interface IItemsListProps {
  items: Item[]
}

export function ItemsList({ items }: IItemsListProps) {
  return (
    <>
      <S.Container>
        {items.map((item, index) => {
          return (
            <S.Item key={`${index}-${item.name}`}>
              <Image src={item.image} alt={item.name} width={48} height={48} />
              {/* <h6>{item.gold.total}</h6> */}
              <S.Infos className="infos">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                />
                <h3>{item.name}</h3>

                <S.Description
                  dangerouslySetInnerHTML={{
                    __html: item.description ?? ""
                  }}
                  className="description"
                ></S.Description>
              </S.Infos>
            </S.Item>
          )
        })}
      </S.Container>
    </>
  )
}
