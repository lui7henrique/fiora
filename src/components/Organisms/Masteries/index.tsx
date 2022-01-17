import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { SummonerProps } from "types/summoner"
import * as S from "./styles"

type MasteriesProps = {
  masteries: SummonerProps["masteries"]
}

const Mastery = ({ mastery }: { mastery: SummonerProps["masteries"][0] }) => {
  const {
    splash_art_cropped,
    chestGranted,
    championId,
    championPoints,
    championName,
    lastPlay,
    championLevel
  } = mastery

  return (
    <S.Mastery level={championLevel}>
      {championLevel && (
        <S.ChampionLevelIcon
          src={`/icons/masteries/bg/mastery-${championLevel}.png`}
          alt={String(championLevel)}
        />
      )}
      <S.MasteryTileWrapper>
        <S.MasteryTile
          src={splash_art_cropped}
          alt={`${championId} icon`}
          layout="fill"
        />
      </S.MasteryTileWrapper>
      <S.MasteryInfos>
        <S.MasteryFlexGroup>
          <S.MasteryChampion>{championName}</S.MasteryChampion>

          {chestGranted && (
            <>
              <S.Divisor>•</S.Divisor>
              <S.MasteryChest>Baú adquirido!</S.MasteryChest>
            </>
          )}
        </S.MasteryFlexGroup>

        <S.MasteryFlexGroup>
          <S.MasteryPoints>
            {championPoints.toLocaleString()} pontos
          </S.MasteryPoints>
        </S.MasteryFlexGroup>
        <S.LastPlayTime>Última partida há {lastPlay}</S.LastPlayTime>
      </S.MasteryInfos>
    </S.Mastery>
  )
}

export const Masteries = ({ masteries: initialMasteries }: MasteriesProps) => {
  const [masteries, setMasteries] = useState(initialMasteries.slice(0, 16))
  const [hasMore, setHasMore] = useState(true)

  const loadMore = () => {
    const newMasteries = [
      ...masteries,
      ...initialMasteries.slice(masteries.length, masteries.length + 16)
    ]

    setMasteries(newMasteries)
    setHasMore(newMasteries.length < initialMasteries.length)
  }

  return (
    <InfiniteScroll
      dataLength={masteries.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<></>}
    >
      <S.Container>
        {masteries.map((mastery) => {
          return <Mastery key={mastery.championId} mastery={mastery} />
        })}
      </S.Container>
    </InfiniteScroll>
  )
}
