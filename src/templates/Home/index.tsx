import { Search } from "@styled-icons/boxicons-regular"
import Image from "next/image"

import fioraSplash from "../../../public/img/fiora.jpg"
import * as S from "./styles"

export function HomeTemplate() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <S.ImageContainer>
          <div>
            <form action="">
              <input type="text" placeholder="Buscar pelo nome de usuário" />
              <button>
                <Search size={25} color={"white"} />
              </button>
            </form>
          </div>
        </S.ImageContainer>
        <Image src={fioraSplash} alt="Fiora splash" layout="fill"></Image>
      </S.ImageWrapper>
    </S.Container>
  )
}
