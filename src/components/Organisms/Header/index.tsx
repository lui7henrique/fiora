import { useRouter } from "next/dist/client/router"
import Link from "next/link"

import * as S from "./styles"

export function Header() {
  const { asPath, pathname } = useRouter()
  console.log(pathname)
  return (
    <S.Container>
      <S.Content>
        <span>Nexus</span>
        <section>
          <nav>
            <Link href="/">
              <a className={`${asPath === "/" && "active"}`}>Home</a>
            </Link>
            <Link href="/champions">
              <a
                className={`${
                  (asPath === "/champions" ||
                    pathname === "/champions/[name]") &&
                  "active"
                }`}
              >
                Campeões
              </a>
            </Link>
            <Link href="/items">
              <a className={`${asPath === "/items" && "active"}`}>Itens</a>
            </Link>
            <Link href="/icons">
              <a className={`${asPath === "/icons" && "active"}`}>Ícones</a>
            </Link>
          </nav>
        </section>
      </S.Content>
    </S.Container>
  )
}
