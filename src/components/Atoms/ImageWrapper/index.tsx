import Image from "next/image"

import * as S from "./styles"

interface IImageWrapperProps {
  icon: string
  size: number
}

export function ImageWrapper({ icon, size }: IImageWrapperProps) {
  return (
    <S.Wrapper size={size}>
      <Image src={icon} alt={icon} width={size} height={size} quality={100} />
    </S.Wrapper>
  )
}
