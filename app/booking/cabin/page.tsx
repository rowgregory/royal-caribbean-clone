'use client';

import useBookingStep from '@/app/utils/hooks/useBookingStep';
import { useState } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import CabinSelector from '@/app/components/cabin/CabinSelector';
import { motion } from 'framer-motion';
import CabinSection from '@/app/components/cabin/CabinSection';

const CabinPage = () => {
  const { cruise } = useCruiseContext() as any;
  const [roomNumber, setRoomNumber] = useState(9422);

  const { shipDeck, ...rest } = cruise || {};
  useBookingStep(2.5, rest);

  return (
    <motion.div
      key="cabin"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="mx-16 pt-5 mb-10">
        <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
          Good choice, now where do you want your room?
        </h1>
        <div className="w-full mx-auto relative bg-white shadow-lg pt-10 overflow-hidden">
          <CabinSelector
            roomNumber={roomNumber}
            setRoomNumber={setRoomNumber}
          />
          <CabinSection roomNumber={roomNumber} setRoomNumber={setRoomNumber} />
        </div>
      </div>
    </motion.div>
  );
};

export default CabinPage;
