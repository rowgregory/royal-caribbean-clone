'use client';

import useBookingStep from '@/app/utils/useBookingStep';
import CabinSVG from '../../assets/CabinSVG';
import { useState, useMemo } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const cabinData = [
  {
    roomNumber: 9422,
  },
  {
    roomNumber: 9418,
  },
  {
    roomNumber: 9428,
  },
  {
    roomNumber: 9430,
  },
];

const CabinPage = () => {
  const { updateCruise, setBookingStep, cruise } = useCruiseContext() as any;
  const [roomNumber, setRoomNumber] = useState(9422);
  const { shipDeck, ...rest } = cruise || {};
  useBookingStep(2.5, rest);

 const memoizedCabinData = useMemo(() => cabinData, [])

  return (
    <div className="mx-16 pt-5 mb-10">
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
        Good choice, now where do you want your room?
      </h1>
      <div className="w-full mx-auto relative bg-white shadow-lg pt-10 overflow-hidden">
        <div className="overflow-y-scroll w-[930px] h-[370px] mx-auto hide-scrollbar">
          <CabinSVG roomNumber={roomNumber} setRoomNumber={setRoomNumber} />
        </div>
        <section className="relative">
          <div className="px-8 py-4 shadow-[0_0_0.5rem_0.0625rem_rgba(6,21,86,0.15)] rounded-tl-lg">
            Deck
          </div>
          {memoizedCabinData.map((obj: any, i: number) => (
            <div
              key={i}
              className={`h-16 px-8 flex justify-between items-center w-full ${
                roomNumber === obj.roomNumber ? 'bg-blue-100' : ''
              }`}
            >
              <div>{obj.roomNumber}</div>
              {roomNumber === obj.roomNumber ? (
                <Link
                  href="/booking/guest-info"
                  className="bg-blue-600 text-sm w-fit px-12 py-2.5 text-white rounded-sm cursor-pointer"
                  onClick={() => {
                    updateCruise({ shipRoomNumber: obj.roomNumber });
                    setBookingStep(3);
                  }}
                >
                  Select
                </Link>
              ) : (
                <div
                  onClick={() => setRoomNumber(obj.roomNumber)}
                  className="flex text-sm items-center text-blue-950 cursor-pointer"
                >
                  Included
                  <FaChevronRight className="text-blue-600 ml-2 text-sm" />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CabinPage;
