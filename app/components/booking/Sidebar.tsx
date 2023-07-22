'use client';

import { useCruiseContext } from '@/app/context/cruiseContext';
import React, { Suspense } from 'react';
import { useCallback, useEffect, useState } from 'react';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';

const Sidebar = () => {
  const [showDetails, setShowDetails] = useState(true);
  const { step } = useCruiseContext() as any;

  useEffect(() => {
    if (step >= 2) setShowDetails(false);
  }, [step]);

  const handleDetailsToggle = useCallback(() => {
    setShowDetails((prev: any) => !prev);
  }, [setShowDetails]);

  return (
    <aside className="w-full max-w-[380px] mt-6 py-4 bg-white rounded-md min-h-[calc(100vh-84px)]">
      <Suspense fallback={<div>Loading...</div>}>
        <TopSection handleDetailsToggle={handleDetailsToggle} />
        <MiddleSection showDetails={showDetails} />
        <BottomSection />
      </Suspense>
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
