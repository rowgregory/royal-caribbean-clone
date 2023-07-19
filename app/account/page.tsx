'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import AccountCC from '../assets/account_cc.png';
import LogoDark from '../assets/logo-dark.png';

const AccountPage = () => {
  return (
    <>
      <div className='max-w-[984px] w-full mx-auto mt-10'>
        <div className='text-2xl text-[#2c2c2c] mb-3'>
          You have 0 upcoming cruises
        </div>
        <div className='text-[#2c2c2c] text-sm font-light'>
          It may take up to 15 minutes for new or updated reservations to
          display.
        </div>

        <Link
          href='/account/signin'
          onClick={() => {
            signOut({ callbackUrl: '/account/signin' });
          }}
        >
          Sign out
        </Link>
      </div>
      <section className='bg-[#f5f8fb] h-[150px] mb-64'>
        <div className='max-w-[984px] w-full h-full mx-auto mt-10 flex justify-between items-center px-6'>
          <div className='flex flex-col'>
            <div className='text-2xl font-bold'>You know you want to go</div>
            <div className='font-light'>
              It’s never too soon to think about your next vacation.
            </div>
          </div>
          <Link
            className='text-white rounded-md w-fit px-10 py-3 bg-sky-500 text-sm shadow-lg'
            href='/cruises'
          >
            Plan a new cruise
          </Link>
        </div>
      </section>
      <Image
        src={AccountCC}
        alt='Online Offer - Eart Points'
        className='max-w-7xl w-full mx-auto mb-10'
      />
      <div className='text-sm text-gray-500 max-w-7xl w-full mx-auto mb-20 leading-6'>
        Due to evolving health protocols, some imagery and messaging may not
        accurately reflect current onboard and destination offerings, or the
        public health standards and government requirements that modify or limit
        these offerings. Onboard and destination experiences, features,
        itineraries, and guest conduct rules vary by ship and destination and
        are subject to change without notice.
      </div>
      <div className='flex max-w-7xl w-full flex justify-center items-center mx-auto mb-20'>
        <Image src={LogoDark} alt='Royal Caribbean Cruises Ltd.' />
        <div className='flex text-gray-500 ml-4'>
          © 2023 Royal Caribbean Cruises Ltd.
        </div>
      </div>
    </>
  );
};

export default AccountPage;
