'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../context/LanguageProvider';
import Image from 'next/image';

const SecondaryHeader = () => {
  const { country } = useContext(LanguageContext) as any;

  return (
    <div className='bg-secondary-header h-24 flex justify-center text-white mx-auto'>
      <div className='max-w-[1312px] flex justify-end w-full items-center'>
        <Link
          href='/resources/select-location'
          className='flex items-center cursor-pointer'
        >
          <div className='font-sans mr-2 text-[12px] tracking-[2px] font-[300]'>
            {country?.textKey || ''}
          </div>
          <Image
            src={country?.flag}
            alt='flag'
            style={{ width: '20px', height: '10px' }}
          />
        </Link>
        <div
          onClick={() => (window.location.href = 'facetime://8665627625')}
          className='font-sans text-[12px] tracking-[2px] font-[300] ml-6 cursor-pointer'
        >
          {country?.number}
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
