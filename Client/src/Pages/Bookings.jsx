import React from 'react'
import BookingCard from './BookingCard';

function Bookings() {
  return (
    <div className='flex flex-col items-center gap-5'>
      <BookingCard/>
      <BookingCard/>
      
    </div>
  );
}



export default Bookings