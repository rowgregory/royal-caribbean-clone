'use client';

import RoomPreferenceSelector from '@/app/components/pricing-options/RoomPreferenceSelctor';
import useBookingStep from '@/app/utils/hooks/useBookingStep';
import { motion } from 'framer-motion';

const PricingOptionsPage = () => {
  useBookingStep(2.2);

  return (
    <motion.div
      key="pricing-options"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
      className="mb-10"
    >
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
        Room preference
      </h1>
      <div className="text-gray-800 mb-9">
        Decisions, decisions — save by letting us assign your room prior to
        sailing, or have total control to find your perfect room.
      </div>
      <RoomPreferenceSelector />
    </motion.div>
  );
};

export default PricingOptionsPage;
