'use client';

import Image from 'next/image';
import ShipSections from '../../assets/ship_section.png';
import { useCruiseContext } from '@/app/context/cruiseContext';
import Link from 'next/link';
import useBookingStep from '@/app/utils/useBookingStep';
import { useMemo } from 'react';

const locationData = [
  {
    section: 'Aft',
    detail:
      'The back of the ship, home to plenty of dining options and great sail-away views.',
  },
  {
    section: 'Mid-Ship',
    detail: 'Mid-ship puts you in the center of all the action.',
    border: 'border-l-2 border-r-2',
  },
  {
    section: 'Forward',
    detail:
      'The front of the ship, quieter and close to the spa and suite lounges.',
  },
];

export interface CruiseContextProps {
  cruise: any;
  step: number;
  addCruise: (cruise: any) => void;
  setBookingStep: (step: number) => void;
  updateCruise: (fields: any) => void;
  removeFieldsFromCruise: (fields: any) => void;
}

const LocationPage = () => {
  const { updateCruise, setBookingStep } = useCruiseContext() as CruiseContextProps;

  useBookingStep(2.3);

  const memoizedLocationData = useMemo(() => locationData, [])

  return (
    <div className="mx-16 pt-5 mb-10">
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
        Good choice, now where do you want your room?
      </h1>
      <div className="relative bg-white shadow-lg p-10">
        <Image src={ShipSections} alt="Ship sections" className="my-24" />
        <div className="absolute inset-0 h-full w-full flex">
          {memoizedLocationData.map((obj: any, i: number) => (
            <div
              key={i}
              className={`${obj.border} w-1/3 text-center pt-10 p-6 flex flex-col justify-between`}
            >
              <div className="flex flex-col">
                <div className="text-2xl mb-3 text-gray-800">{obj.section}</div>
                <div className="text-xs text-gray-800">{obj.detail}</div>
              </div>
              <Link
                href="/booking/deck"
                className="bg-blue-600 text-sm w-fit px-12 py-2.5 text-white rounded-sm mx-auto"
                onClick={() =>{ updateCruise({ shipSection: obj.section }); setBookingStep(2.5)}}
              >
                Select
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
