import { MatchHistory } from "components/Organisms/MatchHistory"
import { useState, useMemo, useEffect, ReactNode } from "react"
import { ISummonerProps } from "types/summoner"

import { Header } from "./Header"
import * as S from "./styles"

export function SummonerTemplate({ summoner, matchHistory }: ISummonerProps) {
  const [activeSection, setActiveSection] =
    useState<{ name: string; label: string; component: ReactNode }>()
  const [width, setWidth] = useState(0)

  const sections = useMemo(
    () => [
      {
        name: "match",
        label: "Histórico",
        component: (
          <MatchHistory matchHistory={matchHistory} summoner={summoner} />
        )
      },
      {
        name: "masteries",
        label: "Campeões",
        component: <h1>Campeões</h1>
      }
    ],
    []
  )

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth
    setWidth(newWidth)
  }

  useEffect(() => {
    setActiveSection(sections[0])
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions)
  }, [width])

  return (
    <S.Container>
      {(width > 768 || width === 0) && (
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sections={sections}
        />
      )}

      <S.Content>
        <S.Aside>
          <S.Profile>
            <S.Level>{summoner.level}</S.Level>

            <S.Avatar src={summoner.icon} alt={summoner.nick} />
          </S.Profile>
          <S.Nickname>{summoner.nick}</S.Nickname>
        </S.Aside>
        {width < 768 && width !== 0 && (
          <Header
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            sections={sections}
          />
        )}
        <S.Main>{activeSection && activeSection.component}</S.Main>
      </S.Content>
    </S.Container>
  )
}
