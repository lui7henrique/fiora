import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document"
import { ServerStyleSheet } from "styled-components"

const hotjar =
  "function(h,o,t,j,a,r){    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};    h._hjSettings={hjid:2788975,hjsv:6};    a=o.getElementsByTagName('head')[0];    r=o.createElement('script');r.async=1;    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;    a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: hotjar }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
