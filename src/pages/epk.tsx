import React, {useState, useEffect} from "react"
import MainContent from '@/components/MainContent'
import { Inter } from 'next/font/google'
import { createClient } from 'contentful'
import Socials from '@/components/Socials'
import OnTour from '@/components/OnTour'
import Gallery from '@/components/Gallery'
import NotableLabelsPerformances from '@/components/NotableLabelsPerformances'
import Footer from '@/components/Footer'
import { BIO, SPOTIFY_LINK, YOUTUBE_LINK } from "@/consts/consts"
import { downloadImage } from "@/utilities/functions"
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Epk({ tourDates, showPhotos, logoPng }: { tourDates: any, showPhotos: any, logoPng: any }) {

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
        if (window.innerWidth < 1024) {
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
      if (window.innerWidth) {
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
        logoUrl={`https:${logoPngUrl}`}
        showDownloadIcon={showDownloadIcon}
        onLogoMouseEnter={() => setShowDownloadIcon(true)}
        onLogoMouseLeave={() => setShowDownloadIcon(false)}
        onLogoDownload={() => downloadImage(`https:${logoPngUrl}`)}
        epk={true}
        additionalMediaLinks={
          <div className="justify-center align-items w-full flex flex-col mt-4 px-2">
            <div className="text-[#FFFFFF] text-[32px] x xl:text-[48px] mt-6 font-bold text-center">Additional Downloadable Media</div>
            <div className="flex justify-center align-items w-full flex-wrap">
              <Link className="mx-4 my-2 " href="https://drive.google.com/drive/folders/1LWG8pPzS8dH6F14KoAGIoST83bjAFcpg?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="text-[#D0D0D0] text-[20px] font-bold cursor-pointer text-center">Photos</div>
              </Link>
              <Link className="mx-4 my-2" href="https://drive.google.com/drive/folders/0B2cm1dEtF0kzY2syRHlDS042SHM?resourcekey=0-GnhUTBqAuAj8VlX4MHhfvg&usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="text-[#D0D0D0] text-[20px]  font-bold cursor-pointer  text-center">Performance Videos</div>
              </Link>
              <Link className="mx-4 my-2" href="https://drive.google.com/drive/folders/15dcHB2tVoCIzWRE_3igN6VgMwQOEpgnK?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="text-[#D0D0D0] text-[20px] font-bold cursor-pointer text-center">Logos</div>
              </Link>
              <Link className="mx-4 my-2" href="https://docs.google.com/document/d/19aL-9hIOpcuDixnIT7-96yWez5oNH-jEWhJIv76rSas/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className="text-[#D0D0D0] text-[20px] font-bold cursor-pointer text-center">Backline / Tech Rider</div>
              </Link>
            </div>
          </div>
        }
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
  const logoPng = await client.getEntries({ content_type: 'logoPng' })
  return { props: {
    showPhotos,
    tourDates,
    logoPng
  }
  
  }
}
