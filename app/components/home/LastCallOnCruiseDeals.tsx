import Image from 'next/image';
import React from 'react';
import LastCall from '../../assets/home/last_call.jpeg';

const LastCallOnCruiseDeals = () => {
  return (
    <div className='max-w-[1920px] px-[190px] relative w-full mx-auto my-20'>
      <div className='relative w-full h-full rounded-md overflow-hidden mx-auto '>
        <Image
          src={LastCall}
          className='w-full h-full object-cover max-h-[300px] rounded-md'
          alt='Last Call on Cruises'
        />

        <div className='absolute inset-0 left-0 p-4 flex justify-center flex-col w-fit'>
          <p className='text-white font-kapra-condensed text-5xl'>
            LAST CALL ON CRUISE DEALS
          </p>
          <p className='text-white font-[200] tracking-[1px]'>
            SCORE BIG SAVINGS ON LAST MINUTE CRUISES
          </p>
          <button className='bg-yellow-400 font-[200] text-black text-sm px-4 py-2 mt-3 rounded-md w-fit'>
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastCallOnCruiseDeals;
