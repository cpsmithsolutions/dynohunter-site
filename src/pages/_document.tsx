import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {

  return (
    <Html lang="en">
      <Head >
      <meta name="facebook-domain-verification" content="kror03mt5ttm7jjjujnm3aoz38kvr2" />
      <script src="./utilities/facebook-tracking.js" async></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
