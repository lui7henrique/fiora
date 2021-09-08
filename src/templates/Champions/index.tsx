import { Search } from "@styled-icons/boxicons-regular"
import { CardList } from "components/Organisms/CardList"
import { ChampionType, IChampionsProps } from "pages/champions"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import * as S from "./styles"

export function ChampionsTemplate({
  champions: InitialChampions
}: IChampionsProps) {
  const [champions, setChampions] = useState<ChampionType[]>(
    InitialChampions.slice(0, 20)
  )
  const [category, setCategory] = useState("All")
  const [hasMore, setHasMore] = useState(true)

  const getMoreChampions = async () => {
    if (champions.length >= InitialChampions.length) {
      setHasMore(false)
    } else {
      const moreChampions = InitialChampions.slice(
        champions.length,
        champions.length + 20
      )
      setChampions((champions) => [...champions, ...moreChampions])
    }
  }

  function handleFilterChampions(category: string) {
    setCategory(category)

    if (!(category === "All")) {
      const filteredChampions = InitialChampions.filter(
        (champion) =>
          (champion.category[0] || champion.category[1]) === category &&
          champion
      )
      setChampions(filteredChampions)
    } else {
      setChampions(InitialChampions)
    }
  }

  function handleSearchByName(name: string) {
    const query = name.trim().toLowerCase()

    if (category !== "") {
      const filteredChampions = InitialChampions.filter(
        (champion) =>
          champion.name.toLowerCase().startsWith(query) ||
          (champion.id.toLowerCase().startsWith(query) && champion)
      )
      setChampions(filteredChampions)
    } else {
      setChampions(InitialChampions)
    }
  }

  return (
    <S.Container>
      <S.Headline>
        <h1>Escolha seu campeão</h1>
        <p>
          Com mais de 140 campeões, você encontrará a combinação perfeita para
          seu estilo de jogo. Domine um ou domine todos eles.
        </p>
      </S.Headline>

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

      {category === "All" ? (
        <InfiniteScroll
          dataLength={champions.length}
          next={getMoreChampions}
          hasMore={hasMore}
          loader={<></>}
        >
          <CardList champions={champions} />
        </InfiniteScroll>
      ) : (
        <CardList champions={champions} />
      )}
    </S.Container>
  )
}
