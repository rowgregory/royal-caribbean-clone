'use client';

import Image from 'next/image';
import React from 'react';
import BookingLandingHero from '../assets/booking_landing_hero.jpeg';
import { useCruiseContext } from '../context/cruiseContext';
import { AiFillTag } from 'react-icons/ai';
import Link from 'next/link';

const BookingLandingPage = () => {
  const { cruise, setBookingStep } = useCruiseContext() as any;

  return (
    <div className="w-full mx-16 pt-5 max-w-[932px] mb-10">
      <div className="relative w-full shadow-lg">
        <Image
          className="w-full max-h-[304px] h-full rounded-md"
          src={BookingLandingHero}
          alt="Book your cruise today!"
        />
        <div className="absolute top-0 bg-black opacity-40 w-full h-full z-[5]"></div>
        <div className="w-fit z-[10] absolute inset-0 left-0 p-4 flex justify-center flex-col">
          <p className="w-fit text-white font-kapra-condensed text-6xl">
            YOU&apos;RE FEELING ADVENTUROUS
          </p>
          <p className="w-fit text-lg text-white tracking-widest text-thin">
            We like that! Let&apos;s get you onboard <br />
            {cruise?.shipName}
          </p>
        </div>
      </div>
      <div className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-8">
        Big Bold Savings
      </div>
      <div className="bg-white shadow-lg flex flex-col w-full">
        <div className="flex justify-between p-7">
          <div className="flex flex-col">
            <div className="mb-3">
              These are the deals you&apos;ve snagged so far:
            </div>
            <div className="text-purple-600 mb-3 text-sm ml-5 flex items-center">
              <AiFillTag className="mr-2" /> 30% off every cruise
            </div>
            <div className="text-purple-600 mb-3 text-sm ml-5 flex items-center">
              <AiFillTag className="mr-2" /> Instant Savings Kicker
            </div>
            <div className="text-purple-600 mb-3 text-sm ml-5 flex items-center">
              <AiFillTag className="mr-2" /> Flash Sale Instant Savings
            </div>
          </div>
          <div className="flex flex-col justify-center items-end">
            <div className="text-sm">From USD* /Person</div>
            <div className="text-blue-950 mt-3 font-kapra-condensed text-7xl">
              ${cruise?.roomPrice}
            </div>
            <div className="text-sm font-light">
              was ${cruise?.originalRoomPrice}/Person
            </div>
          </div>
        </div>
        <div className="bg-gray-100 h-20 flex justify-end items-center pr-7">
          <Link
            onClick={() => {
              setBookingStep(2);
            }}
            href="/booking/stateroom"
            className="bg-blue-600 rounded-sm w-fit text-white flex items-center justify-center px-8 py-3"
          >
            Continue
          </Link>
        </div>
      </div>
      <div className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2">
        Have a Future Cruise Credit?
      </div>
      <div className="text-gray-800 font-light">
        Future Cruise Credits can be used to save big on your next cruise
        vacation. Credits are non-transferable and limited to one per guest.
        Look up the value of your credits while you plan, and you can redeem
        them towards your cruise vacation at checkout.
      </div>
    </div>
  );
};

export default BookingLandingPage;
