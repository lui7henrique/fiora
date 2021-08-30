// import { Expand } from "@styled-icons/boxicons-regular"
import Image from "next/image"
import { useState } from "react"
import {
  MdFullscreen as Full,
  MdFullscreenExit as ExitFull
} from "react-icons/md"
import SwiperCore, { Navigation } from "swiper/core"
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react"

import RpIcon from "../../../../public/img/rp-icon.png"
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
    cost?: string
  }[]
  champion: string
}

SwiperCore.use([Navigation])

export function Swiper({ skins, champion }: ISwiperProps) {
  const [isFull, setIsFull] = useState(false)

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
        <S.Expand>
          {isFull ? (
            <ExitFull size={20} onClick={() => setIsFull(false)} />
          ) : (
            <Full size={20} onClick={() => setIsFull(true)} />
          )}
        </S.Expand>
        {skins.map((skin) => {
          return (
            <SwiperSlide key={skin.id}>
              <S.Wrapper>
                <Image
                  src={
                    isFull
                      ? skin.splash_art_full
                      : skin.splash_art_cropped ?? skin.splash_art_full
                  }
                  alt={`${skin.name}`}
                  width={1280}
                  height={720}
                  layout="intrinsic"
                />
                <S.Infos>
                  <h4>{skin.name}</h4>
                </S.Infos>
                <S.Price>
                  <div>
                    <Image src={RpIcon} alt="RP icon" width={20} height={20} />
                    <span>
                      {skin.cost === "special" ? "Especial" : skin.cost}
                    </span>
                  </div>
                </S.Price>
              </S.Wrapper>
            </SwiperSlide>
          )
        })}
      </SwiperReact>
    </S.Container>
  )
}
