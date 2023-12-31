'use client';

import CategorySelector from '@/app/components/super-category/CategorySelector';
import useBookingStep from '@/app/utils/hooks/useBookingStep';
import { motion } from 'framer-motion';

const SuperCategoryPage = () => {
  useBookingStep(2.1);

  return (
    <motion.div
      key="stateroom"
      initial={{ opacity: 0, translateY: 150 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75 }}
      className="mb-10"
    >
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
        Select your room type
      </h1>
      <CategorySelector />
    </motion.div>
  );
};

export default SuperCategoryPage;
