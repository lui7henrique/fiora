/* eslint-disable @next/next/no-img-element */
import { ProgressBar } from "components/Atoms/ProgressBar"
import { Banner } from "components/Molecules/Banner"
import { Lore } from "components/Molecules/Lore"
import { Profile } from "components/Molecules/Profile"
import { Skills } from "components/Molecules/Skills"
import { Swiper } from "components/Organisms/Swiper"
import { Tips } from "components/Organisms/Tips"
import { ChampionType } from "types/champion"

import * as S from "./styles"

interface IChampionTemplateProps {
  champion: ChampionType
}

export function ChampionTemplate({ champion }: IChampionTemplateProps) {
  return (
    <S.Container>
      <Banner
        splash_art={
          champion.skins[champion.skins.length - 1].splash_art_cropped ??
          champion.skins[champion.skins.length - 1].splash_art_full
        }
      />
      <S.Content>
        <S.Infos>
          <Profile
            icon={champion.icon}
            name={champion.name}
            title={champion.title}
          />

          <ProgressBar
            value={champion.info.attack}
            total={10}
            color="#db3a2c"
            type="Dano"
          />
          <ProgressBar
            value={champion.info.defense}
            total={10}
            color="#8cc84b"
            type="Defesa"
          />
          <ProgressBar
            value={champion.info.magic}
            total={10}
            color="#a32ddf"
            type="Magia"
          />
          <ProgressBar
            value={champion.info.difficulty}
            total={10}
            color="#2ac7e3"
            type="Dificuldade"
          />
        </S.Infos>
        <S.About>
          <Lore lore={champion.lore} />
          <Skills skills={champion.spells} passive={champion.passive} />
          <Tips enemytips={champion.enemytips} allytips={champion.allytips} />
          <Swiper skins={champion.skins} champion={champion.name} />
        </S.About>
      </S.Content>
    </S.Container>
  )
}
