'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/booking/Hero';
import BigBoldSavings from '../components/booking/BigBoldSavings';

const BookingLandingPage = () => {
  return (
    <motion.div
      key="booking"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 150 }}
      transition={{ duration: 0.75 }}
      className="w-full mx-16 pt-5 max-w-[932px] mb-10"
    >
      <Hero  />
      <BigBoldSavings  />
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
