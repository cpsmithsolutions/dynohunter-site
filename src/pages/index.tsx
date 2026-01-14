
import React, {useState, useEffect} from "react"
import MainContent from '@/components/MainContent'
import { Inter } from 'next/font/google'
import { createClient } from 'contentful'
import Socials from '@/components/Socials'
import OnTour from '@/components/OnTour'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import { BIO, SPOTIFY_LINK, YOUTUBE_LINK } from "@/consts/consts"

const inter = Inter({ subsets: ['latin'] })

export default function Home({tourDates, showPhotos, previewImage}: {tourDates: any, showPhotos: any, previewImage: any}) {


  const [windowSize, setWindowSize] = useState({
    width: 840,
    height: 473,
  });
 useWindowSize(); 
  
  function useWindowSize() {  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        if(window.innerWidth < 1024) {
          setWindowSize({
            width: window.innerWidth - 24,
            height: (window.innerWidth - 24) * .55
          });
        } 
        else {
          setWindowSize({
            width: 1000 - 24,
            height: 1000 * .55
          });
        }
      
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      if(window.innerWidth) {
        handleResize();
      }

      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  

  return (
    <main className={`${inter.className} w-full`}>
      <MainContent
        tourDates={tourDates}
        showPhotos={showPhotos}
        windowSize={windowSize}
        epk={false}
      />
    </main>
  )
}


export async function getServerSideProps(context: any) {

  const client = createClient({
    space: String(process.env.CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.CONTENTFUL_ACCESS_KEY),
  })

  const tourDates = await client.getEntries({
    content_type: 'tourDates',
    //@ts-ignore
    order: 'fields.date',
  })

  const showPhotos = await client.getEntries({ content_type: 'showPhotos' })
  const previewImage = await client.getEntries({ content_type: 'previewImage' })
  return { props: {
    showPhotos,
    tourDates,
    previewImage
  }
  
  }
}
