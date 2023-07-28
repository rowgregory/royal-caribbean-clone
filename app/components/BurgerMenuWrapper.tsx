'use client';

import React from 'react';
import { CruiseContextProps, useCruiseContext } from '../context/cruiseContext';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguageContext } from '../context/LanguageProvider';
import Image from 'next/image';

const BurgerMenuWrapper = ({ children }: any) => {
  const { openBurgerMenu, setOpenBurgerMenu } =
    useCruiseContext() as CruiseContextProps;
  const { country } = useLanguageContext();

  return (
    <div>
      <div
        className={`${
          openBurgerMenu
            ? 'transform translate-x-[0px]'
            : 'transform translate-x-[-350px]'
        } transition duration-300 w-full left-0 max-w-[350px] z-[150] fixed min-h-screen bg-white overflow-hidden flex flex-col pl-16 pb-16 flex justify-between`}
      >
        <div className="flex flex-col">
          <FaTimes
            onClick={() => setOpenBurgerMenu(false)}
            className="self-end m-4 text-[#005edc] text-3xl justify-end"
          />
          <Link
            onClick={() => setOpenBurgerMenu(false)}
            className="text-[#005edc] text-sm mb-16 mt-12 tracking-widest"
            href="/signin"
          >
            SIGN IN
          </Link>
          <Link
            onClick={() => setOpenBurgerMenu(false)}
            href="/cruises"
            className="flex items-center text-2xl text-[#005edc]"
          >
            Find A Cruise <FaChevronRight className="ml-6 text-[#005edc]" />
          </Link>
        </div>
        <Link
          onClick={() => setOpenBurgerMenu(false)}
          href="/resources/select-location"
          className="flex items-center cursor-pointer"
        >
          <div className="font-sans mr-2 text-[12px] tracking-[2px] font-[300]">
            {country?.textKey || ''}
          </div>
          <Image
            src={country?.flag}
            alt="flag"
            width="0"
            height="0"
            sizes="100vw"
            className="w-7 h-auto"
          />
        </Link>
      </div>
      <div
        onClick={() => setOpenBurgerMenu(false)}
        className={`${
          openBurgerMenu
            ? 'bg-gray-700 opacity-50 min-h-screen h-full w-full min-w-screen absolute z-[12] top-0 left-0 right-0 bottom-0'
            : ''
        }`}
      ></div>
      <main className={`${openBurgerMenu ? 'overflow-hidden h-screen' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default BurgerMenuWrapper;
