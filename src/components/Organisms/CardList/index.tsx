import Image from "next/image"
import Link from "next/link"
import { IChampionsProps } from "pages/champions"

import * as S from "./styles"

export function CardList({ champions }: IChampionsProps) {
  return (
    <S.CardList>
      {champions.map((champion) => {
        return (
          <Link href={`/champions/${champion.id}`} key={champion.key}>
            <a>
              <S.Card>
                <S.Splash>
                  <figure className="wrapper">
                    <Image
                      src={champion.splash_art_cropped}
                      alt={champion.name}
                      layout={"fill"}
                    />
                  </figure>
                </S.Splash>
                <S.Infos className="infos">
                  <S.Name>{champion.name}</S.Name>
                  <S.Title>{champion.title}</S.Title>
                </S.Infos>
              </S.Card>
            </a>
          </Link>
        )
      })}
    </S.CardList>
  )
}
