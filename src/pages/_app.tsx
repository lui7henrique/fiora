/* eslint-disable @next/next/no-page-custom-font */
import { Header } from "components/Organisms/Header"
import { AppProps } from "next/app"
import Head from "next/head"
import { GlobalStyles } from "styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
