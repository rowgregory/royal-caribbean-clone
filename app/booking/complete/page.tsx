'use client'

import { useCruiseContext } from '@/app/context/cruiseContext';

const BookingCompletePage = () => {
  const { cruise } = useCruiseContext() as any;
  console.log("BOOKING COMPLETE: ", cruise);
  return <div>Booking Complete</div>
}

export default BookingCompletePage