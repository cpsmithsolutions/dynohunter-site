import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {

  return (
    <Html lang="en">
      <Head >
      <meta name="facebook-domain-verification" content="kror03mt5ttm7jjjujnm3aoz38kvr2" />
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1509188753285411');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1509188753285411&ev=PageView&noscript=1"
/></noscript>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
