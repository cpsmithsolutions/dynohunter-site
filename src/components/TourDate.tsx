"use client"
import {useState, useEffect} from "react"
import { format, compareAsc } from 'date-fns'
import { useMediaQuery } from "react-responsive"


const TourDate = ({show}: {show: any}) => {
  const [isMedium, setIsMedium] = useState(true)

  const isMediumSize = useMediaQuery({
    query: '(min-width: 768px)',
  })

  useEffect(() => {
    setIsMedium(isMediumSize)
  }, [isMediumSize])

   const date = format(new Date(show.date), 'MMMM do')
   const mobileDate = format(new Date(show.date), 'MMM d')

    return (
        <div className="flex justify-between my-2 text-[12px] sm:text-[16px]">
          <div>
          <span className="text-[#D0D0D0]">
            {isMedium ?  date : mobileDate}
           </span>
           <span className="ml-2 sm:mx-4 font-bold">{show.name}</span>
           </div>
           <div>
            <span className="mx-2 sm:mx-4 text-[#D0D0D0]">
              {show.venue}
                </span> 
                <span>{show.city}</span>
                <a target="_blank" href={show.ticketLink}>
                <span className="mx-2 sm:mx-4 text-[#44D62C] cursor-pointer font-bold">Tickets</span>
                  </a>
                  </div>
                  </div> 

    )

}

export default TourDate;