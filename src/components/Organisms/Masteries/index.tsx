import { Mastery } from "components/Molecules/Mastery"
import { Mastery as MasteryType } from "types/summoner"

import * as S from "./styles"

interface IMasteriesProps {
  masteries: MasteryType[]
}

export function Masteries({ masteries }: IMasteriesProps) {
  return (
    <S.Container>
      {masteries.slice(0, 20).map((mastery) => {
        return <Mastery key={mastery.key} mastery={mastery} />
      })}
    </S.Container>
  )
}
