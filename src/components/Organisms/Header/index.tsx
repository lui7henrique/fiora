import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useCallback } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { useTheme } from "styled-components"

import * as S from "./styles"

type BaseActiveLinkProps = {
  href: string
  label: string
}

export function Header() {
  const { asPath, back } = useRouter()
  const theme = useTheme()

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
        <S.BaseLinks>
          <Link href="/">
            <a className="logo-link">
              <span className="logo">Zed.gg</span>
            </a>
          </Link>
          <S.GoBack onClick={back}>
            <FiArrowLeft color={theme.colors.text} />
          </S.GoBack>
        </S.BaseLinks>
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
