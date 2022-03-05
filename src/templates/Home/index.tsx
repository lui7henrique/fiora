import { Search } from "@styled-icons/boxicons-regular"
import { Toast } from "components/Atoms/Toast"
import { useRouter } from "next/dist/client/router"
import { useState, useRef, useEffect } from "react"
import { GoMute, GoUnmute } from "react-icons/go"
import { IoMdClose } from "react-icons/io"
import { api } from "services/riot"

import * as S from "./styles"

type Summoner = {
  accountId: string
  id: string
  name: string
  profileIconId: number
  puuid: string
  revisionDate: number
  summonerLevel: number
}

export function HomeTemplate() {
  // constants
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const key = "@zedgg/summoners"

  // states
  const [summonerNick, setSummonerNick] = useState("")
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [previouslySummoners, setPreviouslySummoners] = useState<
    Summoner[] | undefined
  >([] as Summoner[])

  // functions
  const handleSubmitSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (summonerNick.length <= 3 || summonerNick.length > 16) {
      Toast.fire({
        icon: "error",
        title: "Nome de usuário inválido"
      })
    } else {
      try {
        const response = await api.get(
          `/summoner/v4/summoners/by-name/${summonerNick}`
        )

        if (response.status === 200) {
          const { data } = response as { data: Summoner }

          const localStorageData = localStorage.getItem(key)
          const formattedLocalStorageData: Summoner[] = localStorage
            ? JSON.parse(localStorageData!)
            : []

          const hasSummoner = formattedLocalStorageData?.some(
            (summoner) => summoner.id === data.id
          )

          if (!hasSummoner) {
            const formattedData = localStorageData
              ? [...formattedLocalStorageData, data]
              : [data]

            localStorage.setItem(key, JSON.stringify(formattedData))
          }

          router.push(`/summoner/${summonerNick}`)
        }
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "Usuário não encontrado"
        })
      }
    }
  }

  const handleDeleteSummoner = (previouslySummoner: Summoner) => {
    const localStorageData = localStorage.getItem(key)
    const formattedLocalStorageData: Summoner[] = localStorage
      ? JSON.parse(localStorageData!)
      : []

    const filteredData = formattedLocalStorageData.filter(
      (summoner) => summoner.id !== previouslySummoner.id
    )

    localStorage.setItem(key, JSON.stringify(filteredData))

    setPreviouslySummoners(filteredData)

    Toast.fire({
      icon: "success",
      title: "Invocador excluído do histórico com sucesso!"
    })
  }

  useEffect(() => {
    const loadPreviouslySummoners = () => {
      const localStorageData = localStorage.getItem(key)
      const formattedLocalStorageData: Summoner[] = localStorage
        ? JSON.parse(localStorageData!)
        : []

      setPreviouslySummoners(formattedLocalStorageData)
    }

    loadPreviouslySummoners()

    if (videoRef.current) {
      videoRef.current.volume = 0.5
    }
  }, [])

  const handleMuted = () => {
    setIsMuted(!isMuted)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.VideoBanner
          muted={isMuted}
          autoPlay
          loop
          className="bg_video"
          ref={videoRef}
          onClick={() => setIsVisible(false)}
        >
          <source src="/videos/zed2.mp4" type="video/mp4" />
        </S.VideoBanner>
        <S.Mute onClick={handleMuted}>
          {isMuted ? <GoMute size={30} /> : <GoUnmute size={30} />}
        </S.Mute>

        <S.WrapperContainer>
          <S.WrapperContent>
            <S.Search onSubmit={handleSubmitSearch}>
              <S.Input
                type="text"
                placeholder="Digite o nome de um invocador"
                onChange={(e) => setSummonerNick(e.target.value)}
                onClick={() => setIsVisible(true)}
              />
              <S.Button type="submit">
                <Search size={25} color={"white"} />
              </S.Button>
            </S.Search>

            {previouslySummoners && (
              <S.PreviouslySummoners isVisible={isVisible}>
                {previouslySummoners.map((summoner) => {
                  return (
                    <S.PreviouslySummoner key={summoner.id}>
                      <S.PreviouslySummonerBasicInfos
                        href={`/summoner/${summoner.name}`}
                      >
                        <S.PreviouslySummonerIconContainer>
                          <S.PreviouslySummonerIcon
                            src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${summoner.profileIconId}.png`}
                            layout="fill"
                          />
                        </S.PreviouslySummonerIconContainer>
                        <S.PreviouslySummonerInfos>
                          <S.PreviouslySummonerName>
                            {summoner.name}
                          </S.PreviouslySummonerName>
                          <S.PreviouslySummonerLevel>
                            Nível {summoner.summonerLevel}
                          </S.PreviouslySummonerLevel>
                        </S.PreviouslySummonerInfos>
                      </S.PreviouslySummonerBasicInfos>

                      <IoMdClose
                        size={20}
                        onClick={() => handleDeleteSummoner(summoner)}
                      />
                    </S.PreviouslySummoner>
                  )
                })}
              </S.PreviouslySummoners>
            )}
          </S.WrapperContent>
        </S.WrapperContainer>
      </S.Wrapper>
    </S.Container>
  )
}
