'use client';

import LocationSelector from '@/app/components/location/LocationSelector';
import useBookingStep from '@/app/utils/hooks/useBookingStep';
import { motion } from 'framer-motion';

const LocationPage = () => {
  useBookingStep(2.3);

  return (
    <motion.div
      key="location"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="mx-16 pt-5 mb-10">
        <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
          Good choice, now where do you want your room?
        </h1>
        <LocationSelector />
      </div>
    </motion.div>
  );
};

export default LocationPage;
