/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { ChampionType } from "types/champion"

import * as S from "./styles"

interface IChampionTemplateProps {
  champion: ChampionType
}

export function ChampionTemplate({ champion }: IChampionTemplateProps) {
  return (
    <S.Container>
      <S.Content>
        <figure>
          <Image
            src={champion.splash_art_cropped}
            width={1920}
            height={1080}
            alt={`${champion.name} Figure`}
          ></Image>
        </figure>
        <h1>{champion.name}</h1>
      </S.Content>
    </S.Container>
  )
}
