import { Search } from "@styled-icons/boxicons-regular"
import { Toast } from "components/Atoms/Toast"
import { useRouter } from "next/dist/client/router"
import { useState, useRef, useEffect } from "react"
import { GoMute, GoUnmute } from "react-icons/go"
import { api } from "services/riot"

import * as S from "./styles"

export function HomeTemplate() {
  // constants
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)

  // states
  const [summoner, setSummoner] = useState("")
  const [isMuted, setIsMuted] = useState(true)

  // functions
  const handleSubmitSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (summoner.length <= 3 || summoner.length > 16) {
      Toast.fire({
        icon: "error",
        title: "Nome de usuário inválido"
      })
    } else {
      try {
        const { data: dataSummoner } = await api.get(
          `/summoner/v4/summoners/by-name/${summoner}`
        )

        router.push(`/summoner/${summoner}`)
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "Usuário não encontrado"
        })
      }
    }
  }

  useEffect(() => {
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
          // poster="images/torres.jpg"
          className="bg_video"
          ref={videoRef}
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
                onChange={(e) => setSummoner(e.target.value)}
              />
              <S.Button type="submit">
                <Search size={25} color={"white"} />
              </S.Button>
            </S.Search>
          </S.WrapperContent>
        </S.WrapperContainer>
      </S.Wrapper>
    </S.Container>
  )
}
