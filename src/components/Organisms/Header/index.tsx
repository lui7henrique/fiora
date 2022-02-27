import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback } from "react"

import * as S from "./styles"

type BaseActiveLinkProps = {
  href: string
  label: string
}

export function Header() {
  const { asPath } = useRouter()

  const BaseActiveLink = useCallback(
    (props: BaseActiveLinkProps) => {
      const { href, label } = props

      return (
        <Link href={href} passHref>
          <S.Link active={asPath === href}>{label}</S.Link>
        </Link>
      )
    },
    [asPath]
  )

  return (
    <S.Container>
      <S.Content>
        <Link href="/">
          <a>
            <span className="logo">Zed.gg</span>
          </a>
        </Link>
        <S.NavWrapper>
          <S.Nav>
            <BaseActiveLink href="/" label="Home" />
            <BaseActiveLink href="/champions" label="Campeões" />
          </S.Nav>
        </S.NavWrapper>
      </S.Content>
    </S.Container>
  )
}
