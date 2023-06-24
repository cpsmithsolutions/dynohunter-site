'use client'
import React, {useEffect, useState} from "react"
import Image from 'next/image'
import WorkComponent from './WorkComponent'

const Gallery = ({ photos, epk = false }: { photos: any, epk: boolean }) => {
  const [shuffledPhotos, setShuffledPhotos] = useState<any>([])

  function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }

  useEffect(() => {
    setShuffledPhotos(shuffleArray(photos))
  }, [photos])

 

  return (
    <section id="work">
      <div className="">
        <div className="w-full h-[100px] flex flex-col justify-center items-center">
          <div className="text-[32px] sm:text-[36px] font-bold">Photos</div>
          {epk && <div className="text-[12px] text-[#D0D0D0]">(Available for Download)</div>}
        </div>
        <div className="flex flex-wrap justify-center  bg-black items-center">
          {shuffledPhotos.map((p: any) => (
            <WorkComponent
            epk={epk}
              key={p.fields?.imageUrl?.fields?.file?.url}
              imageUrl={p.fields?.imageUrl?.fields?.file?.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
