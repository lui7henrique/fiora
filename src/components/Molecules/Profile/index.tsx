import Image from "next/image"

import * as S from "./styles"

interface IProfileProps {
  icon: string
  name: string
  title?: string
  level?: number
}

export function Profile({ icon, name, title, level }: IProfileProps) {
  return (
    <S.BasicInfos>
      <S.IconWrapper>
        <Image src={icon} width={200} height={200} alt="Profile icon" />
      </S.IconWrapper>
      {level && <S.Level>{level}</S.Level>}
      <h1>{name}</h1>
      <h2>{title}</h2>
    </S.BasicInfos>
  )
}
