'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RoomAmountSelector from '@/app/components/stateroom/RoomAmountSelector';

const StateroomPage = () => {
  return (
      <motion.div
        key="stateroom"
        initial={{ opacity: 0, translateY: 150 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.75 }}
        className="mx-16 pt-5 mb-10"
      >
        <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
          How many rooms do you need?
        </h1>
        <div className="text-gray-800 mb-9">
          Most rooms sleep up to 4 guests
        </div>
        <RoomAmountSelector />
      </motion.div>
  );
};

export default StateroomPage;
