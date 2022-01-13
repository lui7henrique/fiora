import { IChampionsProps } from "pages/champions"

import * as S from "./styles"

type CardItemProps = {
  champion: IChampionsProps["champions"][0]
}

export const CardItem = ({ champion }: CardItemProps) => {
  const translateCategory: {
    [key: string]: string
  } = {
    Assassin: "Assassino",
    Mage: "Mago",
    Fighter: "Lutador",
    Tank: "Tanque",
    Support: "Suporte",
    Marksman: "Atirador"
  }

  return (
    <S.Container href={`/champions/${champion.id}`}>
      <a>
        <S.Card>
          <S.Image alt={champion.name}>
            <S.Splash
              src={champion.splash_art_cropped}
              alt={champion.name}
              layout={"fill"}
              className="splash-art"
            />
            <S.Category className="category">
              <S.CategoryIcon
                src={`/icons/${champion.category[0].toLowerCase()}.png`}
              />
              <S.CategoryName>
                {translateCategory[champion.category[0]]}
              </S.CategoryName>
            </S.Category>
          </S.Image>
          <S.Infos>
            <S.NameAndTitle>
              <S.Name>{champion.name}</S.Name>
              <S.Title>{champion.title}</S.Title>
            </S.NameAndTitle>
            <S.Price>
              <S.BlueEssenceIcon src="/icons/BE_icon.png" />
              <S.PriceValue>{champion.price.blueEssence} EA</S.PriceValue>
            </S.Price>
          </S.Infos>

          <S.BestPlayerContainer>
            <S.BestPlayerBanner />
            <S.BestPlayerIconWrapper>
              <S.BestPlayerIcon
                src="https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/6.png"
                alt={champion.name}
                layout={"fill"}
              />
            </S.BestPlayerIconWrapper>
            <S.BestPlayerName>
              Melhor jogador: Em desenvolvimento 🚧
            </S.BestPlayerName>
          </S.BestPlayerContainer>
        </S.Card>
      </a>
    </S.Container>
  )
}
