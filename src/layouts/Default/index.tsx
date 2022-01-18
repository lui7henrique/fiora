import { Header } from "components/Organisms/Header"
import { NextSeo } from "next-seo"
import Head from "next/head"
import { ReactNode, useEffect } from "react"

import { hotjar } from "react-hotjar"

import * as S from "./styles"

type DefaultLayoutProps = {
  children: ReactNode
  title: string
  description: string
  hasLimiter?: boolean
}

export const DefaultLayout = ({
  title,
  description,
  children,
  hasLimiter = false
}: DefaultLayoutProps) => {
  useEffect(() => {
    hotjar.initialize(2789062, 6)
  }, [])

  return (
    <>
      <Head>
        <title>Zed.gg | {title}</title>
        <meta name="description" content={description} />
      </Head>
      <NextSeo
        title={`Zed.gg | ${title}`}
        description={description}
        canonical="https://zed.gg.vercel.app"
        openGraph={{
          url: "https://zed.gg.vercel.app",
          title: `Zed | ${title}`,
          description:
            "Com mais de 140 Campeões à disposição, sempre há coisas novas para aperfeiçoar. Dê uma olhada em todos eles aqui.",
          images: [
            {
              url: "https://fiora.vercel.app/img/champions.png",
              width: 1280,
              height: 720,
              alt: "Página de campeões"
            }
          ]
        }}
      />
      <Header />
      {hasLimiter ? (
        <S.Container>
          <S.Limiter>{children}</S.Limiter>
        </S.Container>
      ) : (
        <S.Container>{children}</S.Container>
      )}
    </>
  )
}
