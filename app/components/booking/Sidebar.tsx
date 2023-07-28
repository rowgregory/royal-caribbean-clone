'use client';

import {
  CruiseContextProps,
  useCruiseContext,
} from '@/app/context/cruiseContext';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';

const Sidebar = () => {
  const [showDetails, setShowDetails] = useState(true);
  const { step, cruise } = useCruiseContext() as CruiseContextProps;

  useEffect(() => {
    if (step >= 2) setShowDetails(false);
  }, [step]);

  const handleDetailsToggle = useCallback(() => {
    setShowDetails((prev: any) => !prev);
  }, [setShowDetails]);

  return (
    <aside className="w-full min-w-[340px] max-w-[380px] mt-6 py-4 bg-white rounded-md min-h-[calc(100vh-84px)]">
      <TopSection
        handleDetailsToggle={handleDetailsToggle}
        show={showDetails}
        cruise={cruise}
        step={step}
      />
      <MiddleSection showDetails={showDetails} cruise={cruise} step={step} />
      <BottomSection cruise={cruise} step={step} />
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
