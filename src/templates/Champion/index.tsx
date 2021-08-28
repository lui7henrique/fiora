/* eslint-disable @next/next/no-img-element */
import { ProgressBar } from "components/Atoms/ProgressBar"
import { Skills } from "components/Organisms/Skills"
import { Tips } from "components/Organisms/Tips"
import { useState } from "react"
import { ChampionType } from "types/champion"

import * as S from "./styles"

interface IChampionTemplateProps {
  champion: ChampionType
}

export function ChampionTemplate({ champion }: IChampionTemplateProps) {
  const [section, setSection] = useState("lore")

  return (
    <S.Container>
      <S.BannerWrapper>
        <S.Banner
          splash_art={
            champion.skins[champion.skins.length - 1].splash_art_cropped ??
            champion.splash_art_full
          }
        />
      </S.BannerWrapper>
      <S.Content>
        <S.Infos>
          <S.Tags>
            <S.Tag>{champion.tags[0]}</S.Tag>
          </S.Tags>
          <S.BasicInfos>
            <S.IconWrapper>
              <S.Icon icon={champion.icon} />
            </S.IconWrapper>
            <h1>{champion.name}</h1>
            <h2>{champion.title}</h2>
          </S.BasicInfos>

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
          <S.Header>
            <S.Options>
              <h3
                className={`${section === "lore" && "active"} `}
                onClick={() => setSection("lore")}
              >
                Lore
              </h3>
              <h3
                className={`${section === "skills" && "active"} `}
                onClick={() => setSection("skills")}
              >
                Skills
              </h3>
              {(champion.allytips.length > 0 ||
                champion.enemytips.length > 0) && (
                <h3
                  className={`${section === "tips" && "active"} `}
                  onClick={() => setSection("tips")}
                >
                  Dicas
                </h3>
              )}
            </S.Options>
          </S.Header>

          <S.AboutContent>
            {section === "lore" && <S.Lore>{champion.lore}</S.Lore>}
            {section === "skills" && (
              <Skills skills={champion.spells} passive={champion.passive} />
            )}
            {section === "tips" && (
              <Tips
                enemytips={champion.enemytips}
                allytips={champion.allytips}
              />
            )}
          </S.AboutContent>
        </S.About>
      </S.Content>
    </S.Container>
  )
}
