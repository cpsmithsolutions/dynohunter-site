"use client"
const { differenceInDays, isPast, isFuture } = require('date-fns');
import TourDate from "./TourDate";

const OnTour = ({dates}: {dates: any}) => {



function isWithinTwoWeek(date: any) {
  const dateObj = new Date(date)
  const currentDate = new Date();
  const difference = differenceInDays(currentDate, dateObj);

if(isFuture(dateObj)) {
  return true
}
  else if (difference <= 14 && difference >= 0) {
    return true; // Date is up to one week in the past
  } else {
    return false;
  }
}

    return (
        <div className="w-[100%] px-2 sm:px-4 md:px-8 py-8">
        <div className="text-[32px] sm:text-[36px] mb-4 text-center font-bold">Shows</div>
        {dates.map((date: any, i: number) => { 
   if(isWithinTwoWeek(date.fields.date)) {
    return  <TourDate key={date.sys.id} show={date.fields}/>
   }
   else {
   }
     
       })} 

       
      </div>
    )
}

export default OnTour;