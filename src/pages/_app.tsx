import { Footer } from "components/Organisms/Footer"
import { Header } from "components/Organisms/Header"
import { DefaultSeo } from "next-seo"
/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/app"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
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
      <NextNProgress
        color="linear-gradient(90deg, #8257e5 5%, #6833e4 50%, #6833e4 100%)"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
