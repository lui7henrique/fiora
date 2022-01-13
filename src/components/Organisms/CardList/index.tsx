import { IChampionsProps } from "pages/champions"
import { CardItem } from "./CardItem"

import * as S from "./styles"

export function CardList({ champions }: IChampionsProps) {
  return (
    <S.CardList>
      {champions.map((champion) => {
        return <CardItem champion={champion} key={champion.key} />
      })}
    </S.CardList>
  )
}
