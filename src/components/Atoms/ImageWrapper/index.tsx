import Image from "next/image"

import * as S from "./styles"

interface IImageWrapperProps {
  icon: string
  size: number
  mastery_level?: number
}

export function ImageWrapper({
  icon,
  size,
  mastery_level
}: IImageWrapperProps) {
  return (
    <S.Container>
      <S.Wrapper size={size}>
        <Image src={icon} alt={icon} width={size} height={size} quality={100} />
      </S.Wrapper>
      {mastery_level && mastery_level > 3 && (
        <S.MasteryIcon>
          <Image
            src={`/img/masteries/${mastery_level}.png`}
            alt="Mastery"
            width={16}
            height={20}
            quality={100}
          />
        </S.MasteryIcon>
      )}
    </S.Container>
  )
}
