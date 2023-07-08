import Image from 'next/image';
import React from 'react';
import Logo from '../assets/rcg-logo-vertical.svg';
import Footer1 from '../assets/footer_1.svg';
import Footer2 from '../assets/footer_2.svg';
import Footer3 from '../assets/footer_3.svg';

const Footer = () => {
  return (
    <div className='bg-slate-700 mx-auto w-full'>
      <div className='w-full max-w-7xl mx-auto  pb-5'>
        <p className='text-white text-xs py-5'>
          *Please see all applicable Terms & Conditions for Promotions here.
        </p>
        <hr className='border-t border-zinc-600 w-full ' />
      </div>
      <Image src={Logo} alt='RC-vertical-logo' className='w-60 mx-auto my-20' />
      <div className='flex gap-10 justify-center w-full pb-10'>
        <Image src={Footer1} alt='royal caribbean' className='w-48' />
        <Image src={Footer2} alt='celebrity cruises' className='w-48' />
        <Image src={Footer3} alt='silversea' className='w-48' />
      </div>
    </div>
  );
};

export default Footer;
