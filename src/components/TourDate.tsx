"use client"
import { format, compareAsc } from 'date-fns'


const TourDate = ({show}: {show: any}) => {


   const date = format(new Date(show.date), 'MMMM do yyyy')


    return (
        <div className="flex justify-between my-2"><div><span className="text-[#D0D0D0]">{date}</span> <span className="mx-4 font-bold">{show.name}</span></div><div><span className="mx-4 text-[#D0D0D0]">{show.venue}
          </span> <span>{show.city}</span><a target="_blank" href={show.ticketLink}>
          <span className="mx-4 text-[#44D62C] cursor-pointer font-bold">Tickets</span>
            </a></div></div>
    )

}

export default TourDate;