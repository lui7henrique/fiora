import { Chart } from "components/Organisms/Chart"
import { useMemo, useState } from "react"
import { formatMatch } from "utils/match/formatMatch"
import * as S from "./styles"

type MatchTemplateProps = {
  match: ReturnType<typeof formatMatch>
}

export const MatchTemplate = ({ match }: MatchTemplateProps) => {
  const options = useMemo(
    () => [
      {
        title: "Combate",
        graphs: [
          {
            label: "AMA",
            accessor: "ama"
          },
          {
            label: "Abates",
            accessor: "kills"
          },
          {
            label: "Assistências",
            accessor: "assists"
          },
          {
            label: "Mortes",
            accessor: "deaths"
          },
          {
            label: "Maior sequência de abates",
            accessor: "largestKillingSpree"
          },
          {
            label: "Maior multiabates",
            accessor: "largestMultiKill"
          }
        ]
      },
      {
        title: "Dano",
        graphs: [
          {
            label: "Dano total à campeões",
            accessor: "totalDamageDealtToChampions"
          },
          {
            label: "Dano Físico a Campeões",
            accessor: "physicalDamageDealtToChampions"
          },
          {
            label: "Dano Mágico a Campeões",
            accessor: "magicDamageDealtToChampions"
          },
          {
            label: "Dano Verdadeiro a Campeões",
            accessor: "trueDamageDealtToChampions"
          },
          {
            label: "Dano total",
            accessor: "totalDamageDealt"
          },
          {
            label: "Dano Físico",
            accessor: "physicalDamageDealt"
          },
          {
            label: "Dano Mágico",
            accessor: "magicDamageDealt"
          },
          {
            label: "Dano Verdadeiro",
            accessor: "trueDamageDealt"
          },
          {
            label: "Maior Acerto Crítico",
            accessor: "largestCriticalStrike"
          },
          {
            label: "Dano Total aos Objetivos",
            accessor: "damageDealtToObjectives"
          },
          {
            label: "Dano Total a Torres",
            accessor: "damageDealtToTurrets"
          }
        ]
      },
      {
        title: "Dano recebido e curado",
        graphs: [
          {
            label: "Dano curado",
            accessor: "totalHeal"
          },
          {
            label: "Dano recebido",
            accessor: "totalDamageTaken"
          },
          {
            label: "Dano Físico recebido",
            accessor: "physicalDamageTaken"
          },
          {
            label: "Dano Mágico recebido",
            accessor: "magicDamageTaken"
          },
          {
            label: "Dano Verdadeiro recebido",
            accessor: "trueDamageTaken"
          },
          {
            label: "Dano Automitigado",
            accessor: "damageSelfMitigated"
          }
        ]
      },
      {
        title: "Visão",
        graphs: [
          {
            label: "Placar de Visão",
            accessor: "visionScore"
          },
          {
            label: "Sentinelas Invisíveis posicionadas",
            accessor: "wardsPlaced"
          },
          {
            label: "Sentinelas destruídas",
            accessor: "wardsKilled"
          },
          {
            label: "Sentinelas de Controle posicionadas",
            accessor: "detectorWardsPlaced"
          }
        ]
      },
      {
        title: "Receita",
        graphs: [
          {
            label: "Ouro Recebido",
            accessor: "goldEarned"
          },
          {
            label: "Ouro Gasto",
            accessor: "goldSpent"
          },
          {
            label: "Tropas abatidas",
            accessor: "totalMinionsKilled"
          }
        ]
      },
      {
        title: "Objetivos",
        graphs: [
          {
            label: "Torres destruídas",
            accessor: "turretTakedowns"
          },
          {
            label: "Inibidores destruídos",
            accessor: "inhibitorTakedowns"
          }
        ]
      }
    ],
    []
  )

  const [activeOption, setActiveOption] = useState(options[0].graphs[0])

  return (
    <S.Container>
      <S.ChartsContainer>
        <S.ChartOptions>
          {options.map((option) => {
            return (
              <S.ChartOption key={option.title}>
                <S.ChartOptionTitle>{option.title}</S.ChartOptionTitle>
                {option.graphs.map((graph) => {
                  return (
                    <S.ChartOptionLabel
                      key={graph.label}
                      onClick={() => setActiveOption(graph)}
                      active={activeOption === graph}
                    >
                      {graph.label}
                    </S.ChartOptionLabel>
                  )
                })}
              </S.ChartOption>
            )
          })}
        </S.ChartOptions>
        <S.ChartContainer>
          <S.ChartTile>{activeOption.label}</S.ChartTile>
          <Chart
            data={match.participants.map((participant) => {
              const data =
                participant[activeOption.accessor as keyof typeof participant]

              return {
                summoner: participant.summoner,
                champion: participant.champion,
                data: data as Array<number | boolean>
              }
            })}
            title={activeOption.label}
          />
        </S.ChartContainer>
      </S.ChartsContainer>
    </S.Container>
  )
}
