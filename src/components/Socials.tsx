import {useState, useEffect} from "react"
import Image from "next/image";

import { useMediaQuery } from 'react-responsive'
import SocialsDesktop from "./SocialsDesktop";

const Socials = () => {

  const [isMedium, setIsMedium] = useState(true)

  const isMediumSize = useMediaQuery({
    query: '(min-width: 768px)',
  })

  useEffect(() => {
    setIsMedium(isMediumSize)
  }, [isMediumSize])



    return (
      <div className="w-[100%]" role="navigation" aria-label="Social media links">
        {!isMedium ?     
        <div>
        <div className="w-[100%] flex p-2 sm:p-5 pt-0 justify-around items-end">
             <a target="_blank" href="https://www.facebook.com/dynohuntermusic" aria-label="Facebook page" rel="noopener noreferrer">
    <div className="">
      <div className="mb-[8px]">
        <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
          <Image alt="Facebook logo" width={28} height={28} src="/images/facebook-white.svg" />
        </div>
      </div>
      
  
    </div>
    </a>
   
    <a target="_blank" href="https://www.instagram.com/dynohunter" aria-label="Instagram profile" rel="noopener noreferrer">
<div className="">
<div className="">
  <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
    <Image alt="Instagram logo" width={40} height={40} src="/images/instagram-white.svg" />
  </div>
</div>
</div>
</a>
<a target="_blank" href="https://www.youtube.com/@DYNOHUNTER" aria-label="YouTube channel" rel="noopener noreferrer">
<div className="">
<div className="mb-2">
  <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
    <Image alt="YouTube logo" width={32} height={32} src="/images/youtube-icon.png" />
  </div>
</div>
</div>
</a>
       

<a target="_blank" href="https://www.beatport.com/artist/dynohunter/575899" aria-label="Beatport artist page" rel="noopener noreferrer">
<div className="">
  <div className="mb-1">
    <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
      <Image alt="Beatport logo" width={100} height={50} src="/images/beatport-white.png" />
    </div>
  </div>
</div>
</a>
</div>
<div className="w-[100%] flex p-5 pt-0 justify-around items-end">
<a target="_blank" href="https://soundcloud.com/dynohunter" aria-label="SoundCloud profile" rel="noopener noreferrer">
<div className="">
  <div className="mb-1">
    <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
      <Image alt="SoundCloud logo" width={40} height={40} src="/images/soundcloud-white.png" />
    </div>
  </div>
  </div>
  </a>
<a target="_blank" href="https://dynohunter.bandcamp.com/" aria-label="Bandcamp page" rel="noopener noreferrer">
<div className="">
    <div className="mb-1">
      <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
        <Image alt="Bandcamp logo" width={50} height={45} src="/images/bandcamp-white.png" />
      </div>
    </div>
</div>
</a>
<a target="_blank" href="https://open.spotify.com/artist/2gqNRmMqg0cqNPQ6mRcJEi?si=2XE2HTtyRUWJvBbKV3qxKA" aria-label="Spotify artist page" rel="noopener noreferrer">
<div className="">
<div className="">
  <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
    <Image alt="Spotify logo" width={30} height={30} src="/images/spotify-white.png" />
  </div>
</div>
</div>
</a>

<a target="_blank" href="https://dynohunter.bigcartel.com" aria-label="Merch store" rel="noopener noreferrer">
<div className="">
<div className="">
  <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
    <Image alt="Merch store logo" width={32} height={32} src="/images/store-white-2.png" />
  </div>
</div>
</div>
</a>
<a target="_blank" href="mailto:dynohuntermusic@gmail.com" aria-label="Email Dynohunter" rel="noopener noreferrer">
<div className="">
<div className="mb-1 ">
  <div className="transition-all duration-300 transform origin-bottom hover:scale-105">
    <Image alt="Email icon" width={24} height={24} src="/images/email-icon.png" />
  </div>
</div>
</div>
</a>
</div>
</div> : <SocialsDesktop/>}
    
</div>
    )
}
export default Socials;
