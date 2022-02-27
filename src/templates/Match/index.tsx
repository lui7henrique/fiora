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
            label: "AMA"
          },
          {
            label: "Maior sequência de abates"
          },
          {
            label: "Maior multiabates"
          },
          {
            label: "First Blood"
          }
        ]
      },
      {
        title: "Dano",
        graphs: [
          {
            label: "Dano total à campeões"
          },
          {
            label: "Dano Físico a Campeões"
          },
          {
            label: "Dano Mágico a Campeões"
          },
          {
            label: "Dano Verdadeiro a Campeões"
          },
          {
            label: "Dano total"
          },
          {
            label: "Dano Físico"
          },
          {
            label: "Dano Mágico"
          },
          {
            label: "Dano Verdadeiro"
          },
          {
            label: "Maior Acerto Crítico"
          },
          {
            label: "Dano Total aos Objetivos"
          },
          {
            label: "Dano Total a Torres"
          }
        ]
      }
    ],
    []
  )

  const [activeOption, setActiveOption] = useState(options[0].graphs[0])

  return (
    <S.Container>
      <S.MatchOptions>
        {options.map((option) => {
          return (
            <S.MatchOption key={option.title}>
              <S.MatchOptionTitle>{option.title}</S.MatchOptionTitle>
              {option.graphs.map((graph) => {
                return (
                  <S.MatchOptionGraphLabel
                    key={graph.label}
                    onClick={() => setActiveOption(graph)}
                  >
                    {graph.label}
                  </S.MatchOptionGraphLabel>
                )
              })}
            </S.MatchOption>
          )
        })}

        {/* <div>
        <h1>Dano recebido e curado</h1>
        <h3>Dano curado</h3>
        <h3>Dano recebido</h3>
        <h3>Dano Físico recebido</h3>
        <h3>Dano Mágico recebido</h3>
        <h3>Dano Verdadeiro recebido</h3>
        <h3>Dano Automitigado</h3>
      </div>

      <div>
        <h1>Visão</h1>
        <h3>Placar de Visão</h3>
        <h3>Sentinelas Invisíveis posicionadas</h3>
        <h3>Sentinelas destruídas</h3>
        <h3>Sentinelas de Controle posicionadas</h3>
      </div>
      <div>
        <h1>Receita</h1>
        <h3>Ouro Recebido</h3>
        <h3>Ouro Gasto</h3>
        <h3>Tropas abatidas</h3>
        <h3>Monstros neutros abatidos (MNA)</h3>
        <h3>MNA na selva da sua equipe</h3>
        <h3>MNA na selva inimiga</h3>
      </div>
      <div>
        <h1>Torres destruídas</h1>
        <h3>Inibidores destruídos</h3>
      </div> */}
      </S.MatchOptions>
      <S.Content>{activeOption.label}</S.Content>
    </S.Container>
  )
}
