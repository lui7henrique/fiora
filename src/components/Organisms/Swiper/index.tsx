// import { Expand } from "@styled-icons/boxicons-regular"
import Image from "next/image"
import { useState, useEffect } from "react"
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

export function Swiper({ skins }: ISwiperProps) {
  const [openSkin, setOpenSkin] = useState<typeof skins[0]>()

  useEffect(() => {
    if (openSkin) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [openSkin])

  return (
    <>
      {openSkin && (
        <S.OpenSkin>
          <S.Overlay onClick={() => setOpenSkin(undefined)}>
            <S.SkinContainer>
              <S.Skin
                src={openSkin.splash_art_full}
                width={1280}
                height={720}
              />
              <S.SkinLink href={openSkin.splash_art_full} target="blank">
                Ver original
              </S.SkinLink>
            </S.SkinContainer>
          </S.Overlay>
        </S.OpenSkin>
      )}

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
                    src={skin.splash_art_full}
                    alt={`${skin.name}`}
                    width={1280}
                    height={720}
                    layout="intrinsic"
                    className="splash-art"
                    onClick={() => setOpenSkin(skin)}
                  />
                  <S.Infos>
                    <h4>{skin.name}</h4>
                  </S.Infos>
                  <S.Price>
                    <div>
                      <Image
                        src={RpIcon}
                        alt="RP icon"
                        width={20}
                        height={20}
                      />
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
    </>
  )
}
