import * as S from "./styles"

interface ILoreProps {
  lore: string
}

export function Lore({ lore }: ILoreProps) {
  return (
    <S.Container>
      <S.Title>Lore</S.Title>
      <S.Lore>{lore}</S.Lore>
    </S.Container>
  )
}
