import { Header } from "components/Organisms/Header"
import { NextSeo } from "next-seo"
import Head from "next/head"
import { ReactNode } from "react"

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
  return (
    <>
      <Head>
        <title>Zed | {title}</title>
        <meta name="description" content={description} />
      </Head>
      <NextSeo
        title={`Zed | ${title}`}
        description={description}
        canonical="https://zed.vercel.app"
        openGraph={{
          url: "https://fiora.vercel.app",
          title: "Fiora | Campeões",
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
