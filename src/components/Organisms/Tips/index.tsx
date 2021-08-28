import * as S from "./styles"
interface ITipsProps {
  allytips: string[]
  enemytips: string[]
}
export function Tips({ allytips, enemytips }: ITipsProps) {
  return (
    <S.Container>
      <S.Tips>
        <h4>Jogando como:</h4>
        <ul>
          {allytips.map((allytip, index) => {
            return <li key={index}>{allytip}</li>
          })}
        </ul>
      </S.Tips>
      <S.Tips>
        <h4>Jogando contra:</h4>
        <ul>
          {enemytips.map((enemytip, index) => {
            return <li key={index}>{enemytip}</li>
          })}
        </ul>
      </S.Tips>
    </S.Container>
  )
}
