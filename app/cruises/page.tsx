'use client';

import React, { useState } from 'react';
import SecondaryHeader from '../components/SecondaryHeader';
import Header from '../components/Header';
import cruisesPackages from '../utils/cruisePackages';
import Image from 'next/image';
import ItineraryPanel from '../components/ItineraryPanel';

const CruisesPage = () => {
  const [openItineraryPanel, setOpenItineraryPanel] = useState(false);
  const [selectedCruise, setSelectedCruise] = useState({}) as any;

  return (
    <>
      <ItineraryPanel
        openItineraryPanel={openItineraryPanel}
        cruise={selectedCruise}
      />

      <div
        onClick={() => setOpenItineraryPanel(false)}
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
        <Header />
        <div className={` bg-[#f2f2f2] w-full mx-auto`}>
          <div className='w-full max-w-[1440px] mx-auto flex flex-col items-center pt-6'>
            <div className='font-kapra-condensed text-6xl text-[#051656]'>
              UP TO $650 USD OFF
            </div>
            <div className=''>+ 30% off all cruises</div>
            <div className=''>+ Kids sail free*</div>
            <hr className='border-t border-gray-500 w-3/12 my-4' />
            <div className='flex-flex-col w-full max-w-[1220px] mt-8'>
              {cruisesPackages.map((cruise: any, i: number) => (
                <div
                  onClick={() => setSelectedCruise(cruise)}
                  className='h-[300px] h-full flex mb-6 rounded-md w-full'
                  key={i}
                >
                  <Image
                    src={cruise.image}
                    alt={cruise.packageTitle}
                    className='max-w-[350px] h-[300px] w-full object-cover'
                    priority
                  />
                  <div
                    onClick={() => setOpenItineraryPanel(true)}
                    className='flex justify-between w-full pl-8 bg-white cursor-pointer'
                  >
                    <div>
                      {cruise.pill && (
                        <div className='mt-8 bg-sky-200 text-gray-800 text-sm rounded-2xl flex justify-center items-center px-4 py-1 w-fit'>
                          {cruise.pill}
                        </div>
                      )}
                      <h3 className='font-bold text-md mt-6'>
                        {cruise.amountOfNights} NIGHTS
                      </h3>
                      <h1 className='text-3xl mb-6'>{cruise.packageTitle}</h1>
                      <h1 className='mb-4'>{cruise.shipName}</h1>
                      <p className='mb-4 text-sm'>
                        {cruise.direction}: {cruise.directionCities}
                      </p>
                      <div className='text-sm mb-4 flex flex-wrap items-center'>
                        VISITING:
                        {cruise.countriesVisiting.map(
                          (city: string, i: number) => (
                            <p className='mr-1 text-sm' key={i}>
                              {' '}
                              {city},{' '}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                    <div className='w-full max-w-[284px] flex flex-col justify-center items-center'>
                      <h1 className='text-6xl font-kapra-condensed'>
                        ${cruise.price}
                      </h1>
                      <div>{cruise.perPerson}</div>
                      <button>
                        View {cruise.cruiseOptions} date
                        {cruise.cruiseOptions === 1 ? '' : 's'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CruisesPage;
