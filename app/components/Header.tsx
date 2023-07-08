import React from 'react';
import Logo from '../../public/svg/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';

const Burger = () => {
  return (
    <div className='burger relative w-7 h-5 cursor-pointer transition-transform duration-300 transform'>
      <span className='block absolute h-[3px] w-full bg-white transition-transform duration-300 rounded-md'></span>
      <span className='block absolute top-2/4 left-0 transform -translate-y-1/2 h-[3px] w-full bg-white transition-transform duration-300 rounded-md'></span>
      <span className='block absolute bottom-0 h-[3px] w-full bg-white transition-transform duration-300 rounded-md'></span>
    </div>
  );
};

const headerLinksData = [
  {
    linkKey: '',
    textKey: 'FIND A CRUISE',
  },
  {
    linkKey: '',
    textKey: 'DEALS',
  },
  {
    linkKey: '',
    textKey: 'SHIPS',
  },
  {
    linkKey: '',
    textKey: 'DESTINATIONS',
  },
  {
    linkKey: '',
    textKey: 'MANAGE MY CRUISE',
  },
];

const Header = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute z-[10] h-[80px] opacity-1 transition-opacity duration-150 linear max-w-[1312px] w-full flex items-center'>
        <Burger />
        <Image src={Logo} alt='Logo' width={158} className='h-auto ml-[36px]' />
        <div className='flex ml-[32px] items-center'>
          {headerLinksData?.map((link: any, i: number) => (
            <Link
              href={link.linkKey}
              key={i}
              className='text-white tracking-[2px] text-[14px] mr-[32px] font-[300]'
            >
              {link.textKey}
            </Link>
          ))}
          <div className='flex items-center ml-[100px]'>
            <AiOutlineHeart className='text-white mr-[24px]' />
            <AiOutlineBell className='text-white mr-[24px]' />
            <Link
              href='/sign-in'
              className='text-white tracking-[2px] text-[14px] mr-[32px] font-[300]'
            >
              SIGN IN
            </Link>
          </div>
        </div>
        <AiOutlineSearch className='text-white' />
      </div>
    </div>
  );
};

export default Header;
