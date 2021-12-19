import { useState, useMemo, useEffect, ReactNode } from "react"
import { ISummonerProps } from "types/summoner"

import { Header } from "./Header"
import * as S from "./styles"

export function SummonerTemplate({ summoner }: ISummonerProps) {
  const [activeSection, setActiveSection] =
    useState<{ name: string; label: string; component: ReactNode }>()

  const sections = useMemo(
    () => [
      {
        name: "match",
        label: "Histórico",
        component: <h1>Histórico</h1>
      },
      {
        name: "masteries",
        label: "Maestrias",
        component: <h1>Maestrias</h1>
      }
    ],
    []
  )

  useEffect(() => {
    setActiveSection(sections[0])
  }, [])

  return (
    <S.Container>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={sections}
      />

      <S.Content>
        <S.Aside>
          <S.Profile>
            <S.Level>{summoner.level}</S.Level>
            <S.Avatar src={summoner.icon} alt={summoner.nick} />
          </S.Profile>
          <S.Nickname>{summoner.nick}</S.Nickname>
          {/* <S.Level>Nível {summoner.level}</S.Level> */}
        </S.Aside>
        <S.Main>{activeSection && activeSection.component}</S.Main>
      </S.Content>
    </S.Container>
  )
}
