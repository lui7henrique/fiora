import Image from "next/image"
import SwiperCore, { Navigation } from "swiper/core"
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react"

import * as S from "./styles"

interface ISwiperProps {
  skins: {
    id: string
    num: number
    name: string
    splash_art_full: string
    splash_art_cropped?: string
    icon?: string
    loadscreen?: string
    rarity?: string
    cost?: number
  }[]
  champion: string
}

SwiperCore.use([Navigation])

export function Swiper({ skins, champion }: ISwiperProps) {
  console.log(skins, champion)
  return (
    <S.Container>
      <SwiperReact
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 4000 }}
        style={{
          width: "100%",
          flex: "1"
        }}
      >
        {skins.map((skin) => {
          return (
            <SwiperSlide key={skin.id}>
              <S.Wrapper>
                <Image
                  src={skin.splash_art_cropped ?? skin.splash_art_full}
                  alt={`${skin.name}`}
                  width={1280}
                  height={720}
                />
              </S.Wrapper>
            </SwiperSlide>
          )
        })}
      </SwiperReact>
    </S.Container>
  )
}
