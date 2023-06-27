import '@/styles/globals.css'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return <div>
      <NextSeo
        title="DYNOHUNTER | Tribal House & Techno"
        description="DYNOHUNTER is a tribal house and techno project created by DJ, Producer, Saxophonist and Impressions Records Label Boss Clark Smith. Smith layers tribal beats, ethereal textures, and searing synths over deep groovy basslines, using his Saxophone as the protagonist in the eclectic and exotic stories he shares."
        // canonical=""
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.dynohunter.com',
          title: 'DYNOHUNTER | Tribal House & Techno',
          description: 'DYNOHUNTER is a tribal house and techno project created by DJ, Producer, Saxophonist and Impressions Records Label Boss Clark Smith. Smith layers tribal beats, ethereal textures, and searing synths over deep groovy basslines, using his Saxophone as the protagonist in the eclectic and exotic stories he shares.',
          images: [
            {
              url: `https://images.ctfassets.net/mrg9gspwlszz/5MfxKhizQfJNoeGRmDB0d2/6084441de665425c046dfd292c5b97ab/DSC07496_50-low-res.jpg`,
              width: 250,
              height: 250,
              alt: 'DYNOHUNTER Logo',
            },
          ],
          site_name: 'DYNOHUNTER | Tribal House & Techno',
        }}
        twitter={{
          handle: '@dynohuntermusic',
          // site: "@",
          cardType: 'summary_large_image',
        }}
      />
        <Component {...pageProps} />
  </div>

}
