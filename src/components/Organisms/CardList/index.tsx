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
                <S.Infos>
                  <h2>{champion.name}</h2>
                </S.Infos>
              </S.Card>
            </a>
          </Link>
        )
      })}
    </S.CardList>
  )
}
