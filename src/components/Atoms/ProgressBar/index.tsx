import * as S from "./styles"

interface IProgressBar {
  value: number
  total: number
  color: string
  type: string
}

export function ProgressBar({ value, total, color, type }: IProgressBar) {
  const completeLevels = []
  const incompleteLevels = []

  for (let i = 0; i < value; i++) {
    completeLevels.push(i)
  }

  for (let i = 0; i < total - value; i++) {
    incompleteLevels.push(i)
  }

  return (
    <S.Container>
      <h5>{type}</h5>
      <S.Progress total={total}>
        {completeLevels.map((item) => {
          return <S.Level key={item} className="complete" color={color} />
        })}
        {incompleteLevels.map((item) => {
          return <S.Level key={item} className="empty" color={color} />
        })}
      </S.Progress>
    </S.Container>
  )
}
