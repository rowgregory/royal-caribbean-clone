'use client';

import React, { useState } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import useBookingStep from '@/app/utils/useBookingStep';
import GuestIdentifiers from '@/app/components/guest-info/GuestIdentifiers';
import GuestInfoForm from '@/app/components/guest-info/GuestInfoForm';
import { motion } from 'framer-motion';

const GuestInfoPage = () => {
  const { cruise } = useCruiseContext() as any;
  const [currentGuest, setCurrentGuest] = useState('Primary Guest');

  const { shipRoomNumber, ...rest } = cruise || {};
  useBookingStep(
    cruise?.roomPreferenceType === 'We pick your room' ? 2.4 : 2.6,
    rest
  );

  return (
    <motion.div
      key="guest-info"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="mx-16 pt-5 mb-10">
        <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
          Who’s traveling?
        </h1>
        <div className="text-gray-800 mb-9">
          Time to get personal — tell us a bit more about who is traveling.
          Please make sure the details you provide for all guests match their
          government-issued photo IDs.
        </div>
        <div className="bg-white shadow-lg">
          <div className="text-blue-950 text-2xl px-10 pt-10">
            Guest Information
          </div>
          <hr className="border-t border-gray-300 w-full my-5 mx-10" />
          <GuestIdentifiers cruise={cruise} currentGuest={currentGuest} />
          <GuestInfoForm setCurrentGuest={setCurrentGuest} />
        </div>
      </div>
    </motion.div>
  );
};

export default GuestInfoPage;
