import * as S from "./styles"
interface IBannerProps {
  splash_art: string
}

export function Banner({ splash_art }: IBannerProps) {
  return (
    <S.BannerWrapper>
      <S.Banner splash_art={splash_art} />
    </S.BannerWrapper>
  )
}
