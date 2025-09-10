import React, {useEffect, useState} from "react"
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
       <div className="text-[32px] sm:text-[36px] text-center font-bold">Photos</div>
       <div className="justify-center w-full flex mb-4">
       {epk && <div className="text-[#D0D0D0] text-[10px] ">High resolution images available for download on hover</div>}
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
