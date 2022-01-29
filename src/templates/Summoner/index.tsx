import { Masteries } from "components/Organisms/Masteries"
import { MatchHistory } from "components/Organisms/MatchHistory"
import { useState, useMemo, useEffect, ReactNode } from "react"
import { SummonerProps } from "types/summoner"

import { Header } from "./Header"
import * as S from "./styles"

export function SummonerTemplate({
  summoner,
  matchHistory,
  masteries,
  ranks
}: SummonerProps) {
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
        component: <Masteries masteries={masteries} />
      }
    ],
    [masteries, matchHistory, summoner]
  )

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth
    setWidth(newWidth)
  }

  useEffect(() => {
    setActiveSection(sections[0])
  }, [sections])

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions)
  }, [width])

  return (
    <S.Container>
      {(width > 978 || width === 0) && (
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sections={sections}
        />
      )}

      <S.Content>
        <S.Aside>
          <S.AsideContent>
            <S.ProfileWrapper>
              <S.Profile>
                <S.Level>{summoner.level}</S.Level>

                <S.Avatar src={summoner.icon} alt={summoner.nick} />
              </S.Profile>
              <S.Nickname>{summoner.nick}</S.Nickname>
            </S.ProfileWrapper>

            {ranks.length > 0 && (
              <S.Ranks>
                {ranks.map((rank) => {
                  return (
                    <S.Rank
                      key={JSON.stringify(rank)}
                      // href={`/league/${rank.leagueId}`}
                    >
                      <S.RankIcon src={rank.icon} alt={rank.tier} />
                      <S.RankInfos>
                        <S.RankQueue>{rank.queueType}</S.RankQueue>
                        <S.RankName>{rank.tier}</S.RankName>
                        <S.WinRate>
                          Winrate: <strong>{rank.winrate}</strong>
                        </S.WinRate>
                      </S.RankInfos>
                    </S.Rank>
                  )
                })}
              </S.Ranks>
            )}
          </S.AsideContent>
        </S.Aside>
        {width < 978 && width !== 0 && (
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
