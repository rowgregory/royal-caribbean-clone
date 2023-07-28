'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/booking/Hero';
import BigBoldSavings from '../components/booking/BigBoldSavings';
import { CruiseContextProps, useCruiseContext } from '../context/cruiseContext';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BookingLandingPage = () => {
  const { cruise } = useCruiseContext() as CruiseContextProps;

  return (
    <motion.div
      key="booking"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 150 }}
      transition={{ duration: 0.75 }}
      className="mb-10"
    >
      <Hero cruise={cruise} />

      {/* Mobile Top Section of Sidebar*/}
      <div className="flex flex-col p-8 shadow-lg mt-8 font-light text-sm rounded-md text-gray-800 md:flex-row md:justify-between lg:hidden">
        <div className="block font-bold text-2xl mb-5 text-[#061656] md:hidden">
          {cruise?.amountOfNights}&nbsp;
          {cruise?.packageTitle}
        </div>
        <div>Leaving from {cruise?.directionCities}</div>
        <div>onboard the {cruise?.shipName}</div>
        <div className="text-gray-800 flex items-center text-left font-light text-sm mt-4 md:mt-0">
          {cruise?.departDate} <AiOutlineArrowRight className="mx-2" />{' '}
          {cruise?.arrivalDate}
        </div>
      </div>
      <BigBoldSavings cruise={cruise} />
      <div className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
        Have a Future Cruise Credit?
      </div>
      <div className="text-gray-800 font-light">
        Future Cruise Credits can be used to save big on your next cruise
        vacation. Credits are non-transferable and limited to one per guest.
        Look up the value of your credits while you plan, and you can redeem
        them towards your cruise vacation at checkout.
      </div>
    </motion.div>
  );
};

export default BookingLandingPage;
