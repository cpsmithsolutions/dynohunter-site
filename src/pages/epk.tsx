"use client"
import React, {useState, useEffect} from "react"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { createClient } from 'contentful'
import Socials from '@/components/Socials'
import OnTour from '@/components/OnTour'
import Gallery from '@/components/Gallery'
import NotableLabelsPerformances from '@/components/NotableLabelsPerformances'
import Footer from '@/components/Footer'
import { BIO } from "@/consts/consts"
import { downloadImage } from "@/utilities/functions"

const inter = Inter({ subsets: ['latin'] })

export default function Epk({tourDates, showPhotos, logoPng}: {tourDates: any, showPhotos: any, logoPng: any}) {

const logoPngUrl = logoPng.items[0].fields.logoPng.fields.file.url

  const [showDownloadIcon, setShowDownloadIcon] = useState<boolean>(false)
  
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
      className={`${inter.className} flex justify-center`}
    >
      <div className="w-full lg:w-[1024px]">
      <div className="flex justify-center align-end">
      <div className="w-full h-[24vw] lg:w-[1024px] lg:h-[244px] bg-cover bg-no-repeat bg-[url('/images/dynohunter-image-11.jpg')]">
      </div>
      </div>
      <div className="flex p-10 pt-6 justify-around items-end">
       <div className="mb-2">
       <div 
     onMouseEnter={() => setShowDownloadIcon(true)}
     onMouseLeave={() => setShowDownloadIcon(false)}
       className="cursor-pointer p-2">
        <Image width={350} height={350} alt="dynohunter logo"  src="/images/dynohunter-logo.png"/>
        <div className="relative">
<div className="absolute top-[-160px] right-[0px]">
  {
    showDownloadIcon && <div onClick={() => downloadImage(`https:${logoPngUrl}`)} className="p-2">
    <Image alt="download image" width={20} height={20} src="/images/download-icon.svg"/>
    </div>
  }

</div>
        </div>
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
        <iframe className="rounded-none" src="https://open.spotify.com/embed/artist/2gqNRmMqg0cqNPQ6mRcJEi?utm_source=generator&theme=0" width="100%" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </div>
        <NotableLabelsPerformances/>

<div className="flex justify-center">
  
<iframe width={windowSize.width} height={windowSize.height} src="https://www.youtube.com/embed/U68MMrw70dk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
<OnTour dates={tourDates.items} />
<Gallery epk photos={showPhotos.items}/>

<div className="w-full">
<Footer/>
</div>
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
  const logoPng = await client.getEntries({ content_type: 'logoPng' })
  return { props: {
    showPhotos,
    tourDates,
    logoPng
  }
  
  }
}
