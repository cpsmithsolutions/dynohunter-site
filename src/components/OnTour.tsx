"use client"
import TourDate from "./TourDate";

const OnTour = ({dates}: {dates: any}) => {

    return (
        <div className="w-[100%] px-2 sm:px-4 md:px-8 py-8">
        <div className="text-[32px] sm:text-[36px] mb-4 text-center font-bold">Upcoming Shows</div>
        {dates.map((date: any, i: number) => <TourDate key={date.sys.id} show={date.fields}/>)}
      </div>
    )
}

export default OnTour;