'use client';

import Image from 'next/image';
import React from 'react';
import Sidebar from '../components/booking/Sidebar';
import Link from 'next/link';
import { CruiseContextProps, useCruiseContext } from '../context/cruiseContext';
import { FaChevronRight } from 'react-icons/fa';

const Header = () => {
  const { openMobileItinerary, setOpenMobileItinerary } =
    useCruiseContext() as CruiseContextProps;
  return (
    <header
      className={`h-[60px] bg-blue-900 flex items-center ${
        openMobileItinerary ? 'fixed w-full z-[100]' : ''
      }`}
    >
      <Link href="/">
        <Image
          src="/logo-white.png"
          alt="Royal Caribbean"
          className="mx-auto object-cover w-10 h-auto ml-5"
          width="0"
          height="0"
          sizes="100vw"
          priority={true}
        />
      </Link>
      <div
        className="block text-white ml-6 text-sm flex items-center cursor-pointer md:hidden"
        onClick={() => setOpenMobileItinerary(!openMobileItinerary)}
      >
        View Itinerary <FaChevronRight className="text-white ml-1" />
      </div>
    </header>
  );
};

const MainContent = ({ children }: any) => {
  return (
    <main className={`px-4 md:px-6 lg:px-12 w-[calc(1440px-380px)]`}>
      {children}
    </main>
  );
};

const BookingLayout = ({ children }: any) => {
  const { openMobileItinerary } = useCruiseContext() as CruiseContextProps;
  return (
    <div className="bg-[#f7f8f9] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        <Header />
        <section
          className={`${
            openMobileItinerary
              ? 'fixed overflow-scroll top-[60px] z-[1000] pb-12 block w-screen h-screen bg-white'
              : 'hidden'
          }`}
        >
          <div className="block lg:hidden ">
            <Sidebar />
          </div>
        </section>
        <div className="flex w-full max-w-[1440px]">
          <div className="hidden lg:block ">
            <Sidebar />
          </div>
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </div>
  );
};

export default BookingLayout;
