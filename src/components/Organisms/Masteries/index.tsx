import { Search } from "@styled-icons/boxicons-regular"
import { Mastery } from "components/Molecules/Mastery"
import { useState } from "react"
import { MdExpandLess, MdExpandMore } from "react-icons/md"
import { Mastery as MasteryType } from "types/summoner"

import * as S from "./styles"

interface IMasteriesProps {
  masteries: MasteryType[]
}

export function Masteries({ masteries: InitialMasteries }: IMasteriesProps) {
  const [masteries, updateMasteries] = useState(InitialMasteries)
  const [category, setCategory] = useState("All")
  const [total, setTotal] = useState(10)

  function handleSearchByName(name: string) {
    const query = name.trim().toLowerCase()

    if (query !== "") {
      const filteredMasteries = masteries.filter((mastery) =>
        mastery.name.toLowerCase().startsWith(query)
      )
      updateMasteries(filteredMasteries)
    } else {
      updateMasteries(InitialMasteries)
    }
  }

  function handleFilterChampions(category: string) {
    setCategory(category)

    if (!(category === "All")) {
      const filteredMasteries = InitialMasteries.filter(
        (champion) =>
          (champion.category[0] || champion.category[1]) === category &&
          champion
      )
      updateMasteries(filteredMasteries)
    } else {
      updateMasteries(InitialMasteries)
    }
  }

  return (
    <S.Container>
      <S.Filter>
        <S.Search>
          <Search size={20} />
          <input
            type="text"
            onChange={(e) => handleSearchByName(e.target.value)}
            placeholder="Pesquisa"
          />
        </S.Search>
        <S.Classes>
          <button
            onClick={() => handleFilterChampions("All")}
            className={`${category === "All" ? "active" : ""}`}
          >
            Todos
          </button>
          <button
            onClick={() => handleFilterChampions("Assassin")}
            className={`${category === "Assassin" ? "active" : ""}`}
          >
            Assassino
          </button>
          <button
            onClick={() => handleFilterChampions("Fighter")}
            className={`${category === "Fighter" ? "active" : ""}`}
          >
            Lutador
          </button>
          <button
            onClick={() => handleFilterChampions("Mage")}
            className={`${category === "Mage" ? "active" : ""}`}
          >
            Mago
          </button>
          <button
            onClick={() => handleFilterChampions("Marksman")}
            className={`${category === "Marksman" ? "active" : ""}`}
          >
            Atirador
          </button>
          <button
            onClick={() => handleFilterChampions("Support")}
            className={`${category === "Support" ? "active" : ""}`}
          >
            Suporte
          </button>
          <button
            onClick={() => handleFilterChampions("Tank")}
            className={`${category === "Tank" ? "active" : ""}`}
          >
            Tanque
          </button>
        </S.Classes>
      </S.Filter>

      {masteries.slice(0, total).map((mastery) => {
        return <Mastery key={mastery.key} mastery={mastery} />
      })}

      {total !== masteries.length && masteries.length > 20 && (
        <S.Load onClick={() => setTotal(masteries.length)}>
          <MdExpandMore size={40} />
        </S.Load>
      )}

      {total === masteries.length && (
        <S.Load onClick={() => setTotal(20)}>
          <MdExpandLess size={40} />
        </S.Load>
      )}
    </S.Container>
  )
}
