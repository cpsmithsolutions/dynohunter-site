/* eslint-disable @next/next/no-img-element */
import {useState} from "react"
import Image from "next/image"
import { downloadImage } from "@/utilities/functions"

const ImageComponent = ({ imageUrl, epk }: { imageUrl: string, epk: boolean }) => {
  const [showDownloadIcon, setShowDownloadIcon] = useState<boolean>(false)

  return (
    <div onMouseEnter={() => setShowDownloadIcon(true)}
    onMouseLeave={() => setShowDownloadIcon(false)}
    className="w-full md:w-[50%] relative">
      {showDownloadIcon && epk &&
        <div onClick={() => downloadImage(`https:${imageUrl}`)} className='absolute right-[10px] top-[10px] cursor-pointer transition duration-700 ease-in-out' aria-label="Download image button" role="button" tabIndex={0}>
          <div className="p-2">
          <Image alt="Download image" width={20} height={20} src="/images/download-icon.svg" />
          </div>
        </div>
        // </a>
        }
     {imageUrl && <img alt="image" src={`https:${imageUrl}`}  />}
    </div>
  )
}

export default ImageComponent
