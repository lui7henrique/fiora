import { Header } from "components/Organisms/Header"
import { DefaultSeo } from "next-seo"
/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/app"
import Head from "next/head"
import { GlobalStyles } from "styles/global"

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import SEO from "../../next-seo.config"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#8257e5" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
