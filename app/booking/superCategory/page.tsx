'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useCruiseContext } from '@/app/context/cruiseContext';
import Link from 'next/link';
import useBookingStep from '@/app/utils/useBookingStep';
import cruisesPackages from '@/app/utils/cruisePackages';

const SuperCategoryPage = () => {
  const { updateCruise, cruise, setBookingStep } = useCruiseContext() as any;

  useBookingStep(2.1);

  const rooms = useMemo(() => {
    return cruisesPackages
      ?.flatMap(
        (c: any) =>
          c.availableDates?.find((obj: any) => obj.id === cruise?.dateId)?.rooms
      )
      .filter((r) => r !== undefined);
  }, [cruise]);

  return (
    <div className="mx-16 pt-5 mb-10">
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-10">
        Select your room type
      </h1>
      {rooms?.map((room: any, i: number) => (
        <div
          key={i}
          className="flex w-full h-[365px] mb-8 rounded-md shadow-lg relative"
        >
          <Image
            className="w-1/2 object-cover"
            src={room.image}
            alt="Room Type"
          />
          <div className="absolute w-1/2 inset-0 text-white text-6xl font-kapra-condensed p-8">
            {room.type}
          </div>
          <div className="flex flex-col bg-white p-8">
            <div className="text-xs mb-2 text-blue-950">Avg USD/Person*</div>
            <div className="text-6xl font-kapra-condensed text-blue-950 mb-5">
              ${room.price}
            </div>
            <div className="text-light mb-9">{room.description}</div>
            <Link
              onClick={() => {
                updateCruise({
          
                    roomType: room.type,
                    roomPrice: room.price,
                    originalRoomPrice: room.originalPrice
            
                });
                setBookingStep(2.3);
              }}
              href="/booking/pricing-options"
              className="bg-blue-700 px-8 py-3 text-white rounded-sm w-fit cursor-pointer"
            >
              Select
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuperCategoryPage;
