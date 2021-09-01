import { Banner } from "components/Molecules/Banner"
import { Profile } from "components/Molecules/Profile"
import { Masteries } from "components/Organisms/Masteries"
import { Matches } from "components/Organisms/Matches"
import { useState } from "react"
import { ISummonerProps } from "types/summoner"

import * as S from "./styles"

export function SummonerTemplate({ summoner }: ISummonerProps) {
  const [section, setSection] = useState("match-history")
  console.log(summoner)
  return (
    <S.Container>
      <Banner splash_art={summoner.splash_art} />
      <S.Content>
        <S.Aside>
          <Profile
            icon={summoner.icon}
            name={summoner.nick}
            level={summoner.level}
          />
        </S.Aside>

        <S.Main>
          <S.Header>
            <S.Options>
              <h3
                className={`${section === "match-history" && "active"} `}
                onClick={() => setSection("match-history")}
              >
                Histórico
              </h3>
              <h3
                className={`${section === "masteries" && "active"} `}
                onClick={() => setSection("masteries")}
              >
                Maestrias
              </h3>
            </S.Options>
          </S.Header>
          {section === "match-history" && (
            <Matches matches={summoner.matches} />
          )}
          {section === "masteries" && (
            <Masteries masteries={summoner.masteries} />
          )}
        </S.Main>
      </S.Content>
    </S.Container>
  )
}
