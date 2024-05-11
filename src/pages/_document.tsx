/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {

  return (
    <Html lang="en">
      <Head >
      <meta name="facebook-domain-verification" content="kror03mt5ttm7jjjujnm3aoz38kvr2" />
        </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
                        <img alt="pixel" height="1" width="1" style={{display: "none"}}
                            src="https://www.facebook.com/tr?id=1509188753285411&ev=PageView&noscript=1"
                        />
                    </noscript>
      </body>
    </Html>
  )
}
