'use client';

import React, { useState } from 'react';
import SecondaryHeader from '../components/SecondaryHeader';
import Header from '../components/Header';
import ItineraryPanel from '../components/ItineraryPanel';
import PromotionBanner from '../components/cruises/PromotionBanner';
import CruiseList from '../components/cruises/CruiseList';
import { usePathname } from 'next/navigation';

const CruisesPage = () => {
  const [openItineraryPanel, setOpenItineraryPanel] = useState(false);
  const [selectedCruise, setSelectedCruise] = useState({}) as any;
  const path = usePathname();
  const isCruisePage = path === '/cruises';

  const handleOpenItineraryPanel = (cruise: any) => {
    setSelectedCruise(cruise);
    setOpenItineraryPanel(true);
  };

  const handleCloseItineraryPanel = () => {
    setOpenItineraryPanel(false);
  };

  return (
    <>
      <ItineraryPanel
        openItineraryPanel={openItineraryPanel}
        cruise={selectedCruise}
        setOpenItineraryPanel={setOpenItineraryPanel}
      />

      <div
        onClick={handleCloseItineraryPanel}
        className={`${
          openItineraryPanel
            ? 'bg-gray-700 opacity-50 min-h-screen h-full w-full min-w-screen absolute z-[12] top-0 left-0 right-0 bottom-0'
            : ''
        }`}
      ></div>
      <div
        className={`min-h-screen ${
          openItineraryPanel ? 'overflow-hidden h-screen' : ''
        }`}
      >
        <SecondaryHeader />
        <Header isCruisePage={isCruisePage} />
        <div
          className={`min-h-[calc(100vh-104px)] bg-[#f2f2f2] w-full mx-auto`}
        >
          <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center pt-6">
            <PromotionBanner />
            <CruiseList onCruiseCardClick={handleOpenItineraryPanel} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CruisesPage;
