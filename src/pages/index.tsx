
import React, {useState, useEffect} from "react"
import Image from 'next/image'
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
    <main
      className={`${inter.className} flex justify-center`}>
      <div className="w-full lg:w-[1024px]">
      <div className="flex justify-center align-end">
      <div className="w-full h-[24vw] lg:w-[1024px] lg:h-[244px] bg-cover bg-no-repeat bg-[url('/images/dynohunter-image-11.jpg')]">
      </div>
      </div>
      <div className="flex p-10 pt-6 justify-around items-end">
       <div className="mb-2">
       <div className="">
        <Image priority={true} width={350} height={350} alt="dynohunter logo"  src="/images/dynohunter-logo.png"/>
        </div>  
       </div>
        </div>
        <Socials/>
        <div>
          
        </div>
        <div className="p-5 pb-10">
       {BIO}
        </div>
        <div className='px-5'>
        <iframe className="rounded-none" src={SPOTIFY_LINK} width="100%" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

<div className="flex justify-center p-5">
<iframe
width={windowSize.width} height={windowSize.height}
src={YOUTUBE_LINK} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
<OnTour dates={tourDates.items} />
<Gallery epk={false} photos={showPhotos.items}/>
<Footer/>
        </div>
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
