import Image from "next/image"

import * as S from "./styles"

interface IBuildProps {
  build: number[]
}

export function Build({ build }: IBuildProps) {
  return (
    <S.Container>
      {build.map((item, index) => {
        return item === 0 ? (
          <div className="empty"></div>
        ) : (
          <Image
            key={`${index}${item}`}
            src={`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/${item}.png`}
            alt={`Item ${item}`}
            width={30}
            height={30}
          />
        )
      })}
    </S.Container>
  )
}
