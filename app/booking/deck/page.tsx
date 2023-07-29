'use client';

import useBookingStep from '@/app/utils/hooks/useBookingStep';
import React, { useState } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import ShipImage from '@/app/components/deck/ShipImage';
import { motion } from 'framer-motion';
import DeckSelector from '@/app/components/deck/DeckSelector';

const DeckPage = () => {
  const { cruise } = useCruiseContext() as any;
  const [deckNumber, setDeckNumber] = useState(9);

  useBookingStep(2.4);

  return (
    <motion.div
      key="deck"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
      className="mb-10"
    >
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
        Good choice, now where do you want your room?
      </h1>
      <div className="bg-white shadow-lg pt-10 overflow-hidden">
        <ShipImage deckNumber={deckNumber} section={cruise?.shipSection} />
        <DeckSelector deckNumber={deckNumber} setDeckNumber={setDeckNumber} />
      </div>
    </motion.div>
  );
};

export default DeckPage;
