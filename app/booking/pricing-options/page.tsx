'use client';

import React, { useMemo } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import Link from 'next/link';
import useBookingStep from '@/app/utils/useBookingStep';

const roomPreferenceData = [
  {
    title: 'We pick your room',
    description: `Just prior to cruising, we’ll assign you a room in your selected category. The room may have an obstructed view. If you need connecting rooms, please select your room instead.`,
    titleBg: 'bg-blue-400',
  },
  {
    title: 'You pick your room',
    description: `You choose your exact room, including specific location and optional upgrades.`,
    titleBg: 'bg-blue-800',
  },
] as any;

const PricingOptionsPage = () => {
  const { updateCruise, setBookingStep, cruise } = useCruiseContext() as any;

  const roomPreferences = useMemo(() => {
    return roomPreferenceData.map((pref: any, i: number) => {
      const price = i === 1 ? cruise?.roomPrice + 66 : cruise?.roomPrice;
      return { ...pref, price };
    });
  }, [cruise?.roomPrice]);

  useBookingStep(2.2)

  return (
    <div className="mx-16 pt-5 mb-10">
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
        Room preference
      </h1>
      <div className="text-gray-800 mb-9">
        Decisions, decisions — save by letting us assign your room prior to
        sailing, or have total control to find your perfect room.
      </div>
      <div className="w-full flex gap-5">
        {roomPreferences.map((pref: any, i: number) => (
          <div key={i} className="w-1/2 rounded-md shadow-md bg-white">
            <div className={`px-5 py-7 ${pref.titleBg} text-white text-2xl`}>
              {pref.title}
            </div>
            <div className="px-5 py-7 flex flex-col items-between w-full bg-white h-[290px]">
              <div className="flex h-full">
                <div className="w-7/12 font-light">{pref.description}</div>
                <div className="w-5/12 font-kapra-condensed text-6xl text-right text-blue-950">
                  ${pref.price}
                </div>
              </div>
              <div className="flex flex-col items-end w-full">
                <hr className="border-t border-gray-300 w-full mt-4 mb-5" />
                <Link
                  onClick={() => {
                    if (pref.title === 'We pick your room') {
                      updateCruise({
                        roomPreferenceType: pref.title,
                        subtotal: pref.price * (cruise.guests.adults + cruise.guests.children),
                        pickYourRoomPrice: pref.price
                      });
                      setBookingStep(3);
                    } else {
                      // TODO
                      updateCruise({
                        roomPreferenceType: pref.title,
                        subtotal: pref.price * (cruise.guests.adults + cruise.guests.children),
                        pickYourRoomPrice: pref.price
                      });
                      setBookingStep(2.4);
                    }
                  }}
                  className="bg-blue-500 flex justify-center items-center text-right text-white h-[40px] w-[105px] rounded-sm cursor-pointer"
                  href={
                    pref.title === 'We pick your room'
                      ? '/booking/guest-info'
                      : '/booking/location'
                  }
                >
                  Select
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingOptionsPage;
