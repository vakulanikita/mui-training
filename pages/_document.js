// import { ColorModeScript } from "@chakra-ui/react"
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import theme from "../lib/theme"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        </Head>
        <body>
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}