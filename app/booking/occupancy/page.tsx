'use client';

import OccupancySelector from '@/app/components/occupancy/OccupancySelector';
import useBookingStep from '@/app/utils/useBookingStep';
import { motion } from 'framer-motion';

const OccupancyPage = () => {
  useBookingStep(2);

  return (
    <motion.div
      key="occupancy"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
      className="mx-16 pt-5 mb-10"
    >
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
        How many guests are in your room?
      </h1>
      <div className="text-gray-800 mb-9">Most rooms sleep up to 4 guests</div>
      <OccupancySelector />
    </motion.div>
  );
};

export default OccupancyPage;
