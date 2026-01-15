import React from "react";
import Image from "next/image";
import Socials from "@/components/Socials";
import OnTour from "@/components/OnTour";
import Gallery from "@/components/Gallery";
import NotableLabelsPerformances from "@/components/NotableLabelsPerformances";
import Footer from "@/components/Footer";
import { BIO, SPOTIFY_LINK, YOUTUBE_LINK } from "@/consts/consts";

interface MainContentProps {
  tourDates: any;
  showPhotos: any;
  windowSize: { width: number; height: number };
  logoUrl?: string;
  showDownloadIcon?: boolean;
  onLogoMouseEnter?: () => void;
  onLogoMouseLeave?: () => void;
  onLogoDownload?: () => void;
  epk?: boolean;
  additionalMediaLinks?: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({
  tourDates,
  showPhotos,
  windowSize,
  logoUrl = "/images/dynohunter-logo.png",
  showDownloadIcon = false,
  onLogoMouseEnter,
  onLogoMouseLeave,
  onLogoDownload,
  epk = false,
  additionalMediaLinks,
}) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Image */}
      <div
        className="w-full h-32 sm:h-48 md:h-64 lg:h-[40vw] lg:max-h-[320px] bg-cover bg-no-repeat rounded-md mb-6"
        style={{ backgroundImage: "url('/images/dynohunter-image-11.jpg')" }}
      ></div>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div
          onMouseEnter={onLogoMouseEnter}
          onMouseLeave={onLogoMouseLeave}
          className={epk ? "cursor-pointer" : undefined}
          aria-label="Dynohunter logo section"
        >
          <Image
            priority={true}
            width={600}
            height={560}
            alt="Dynohunter logo"
            src={logoUrl}
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto"
            onClick={epk && onLogoDownload ? onLogoDownload : undefined}
          />
          {epk && (
            <>
              <div className="justify-center w-full flex">
                <div className="text-[#D0D0D0] text-[10px] mt-6">
                  Logo available for download on hover
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-[-160px] right-[0px]">
                  {showDownloadIcon && (
                    <div onClick={onLogoDownload} className="p-2" aria-label="Download logo button" role="button" tabIndex={0}>
                      <Image
                        alt="Download logo"
                        width={20}
                        height={20}
                        src="/images/download-icon.svg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Socials />

      {/* Bio */}
      <div className="py-5 pb-10">{BIO}</div>

      {/* Spotify */}
      <div className="w-full my-6">
        <iframe
          className="rounded-md w-full"
          src={SPOTIFY_LINK}
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Notable Labels/Performances (EPK only) */}
      {epk && <NotableLabelsPerformances />}

      {/* YouTube */}
      <div className="w-full my-6 aspect-video">
        <iframe
          className="rounded-md w-full h-full"
          src={YOUTUBE_LINK}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <OnTour dates={tourDates.items} />
      <Gallery epk={epk} photos={showPhotos.items} />

      {/* Additional Media Links (EPK only) */}
      {epk && additionalMediaLinks}

      <Footer />
    </div>
  );
};

export default MainContent;
