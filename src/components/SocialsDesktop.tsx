import Image from "next/image"

const SocialsDesktop = () => {

        // All logos use scale-105 for hover effect for visual consistency
        return (
            <div className="w-[100%] flex p-5 pt-0 justify-around items-end">
                {/* Facebook */}
                <a target="_blank" href="https://www.facebook.com/dynohuntermusic">
                    <div className="mb-[6px]">
                        <div className="cursor-pointer transition-all duration-300 transform origin-bottom hover:scale-105">
                            <Image alt="facebook logo" width={30} height={30} src="/images/facebook-white.svg"/>
                        </div>
                    </div>
                </a>
                {/* Instagram */}
                <a target="_blank" href="https://www.instagram.com/dynohunter">
                    <div className=" ">
                        <div className="cursor-pointer transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="instagram logo" width={40} height={40} src="/images/instagram-white.svg"/>
                        </div>
                    </div>
                </a>
                {/* YouTube */}
                <a target="_blank" href="https://www.youtube.com/@DYNOHUNTER">
                    <div className="mb-[8px]">
                        <div className="cursor-pointer transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="youtube logo" width={32} height={32} src="/images/youtube-icon.png"/>
                        </div>
                    </div>
                </a>
                {/* SoundCloud */}
                <div className="mb-[10px]">
                    <a target="_blank" href="https://soundcloud.com/dynohunter">
                        <div className="cursor-pointer transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="soundcloud logo" width={40} height={40} src="/images/soundcloud-white.png"/>
                        </div>
                    </a>
                </div>
                {/* Beatport */}
                <a target="_blank" href="https://www.beatport.com/artist/dynohunter/575899">
                    <div className="">
                        <div className="cursor-pointer  transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="beatport logo" width={110} height={50} src="/images/beatport-white.png"/>
                        </div>
                    </div>
                </a>
                {/* Bandcamp */}
                <a target="_blank" href="https://dynohunter.bandcamp.com/">
                    <div className="mb-[10px]">
                        <div className="cursor-pointer transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="bandcamp" width={55} height={40} src="/images/bandcamp-white.png"/>
                        </div>
                    </div>
                </a>
                {/* Spotify */}
                <a target="_blank" href="https://open.spotify.com/artist/2gqNRmMqg0cqNPQ6mRcJEi?si=2XE2HTtyRUWJvBbKV3qxKA">
                    <div className="mb-[8px]">
                        <div className="cursor-pointer transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="spotify" width={30} height={30} src="/images/spotify-white.png"/>
                        </div>
                    </div>
                </a>
                {/* Merch Store */}
                <a target="_blank" href="https://dynohunter.bigcartel.com">
                    <div className="mb-[5px] ">
                        <div className="cursor-pointer transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="merch store" width={32} height={32} src="/images/store-white-2.png"/>
                        </div>
                    </div>
                </a>
                {/* Email */}
                <a target="_blank" href="mailto:dynohuntermusic@gmail.com">
                    <div className="mb-[8px]">
                        <div className="cursor-pointer transition-all duration-200 transform origin-bottom hover:scale-105">
                            <Image alt="email" width={24} height={24} src="/images/email-icon.png"/>
                        </div>
                    </div>
                </a>
                </div>
    )
}

export default SocialsDesktop