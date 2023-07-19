'use client';

import React from 'react';
import Logo from '../../public/svg/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import PreGold from '../assets/cruises/pre-gold.svg';
import dynamic from 'next/dynamic';

const AiOutlineHeart = dynamic(() => import('react-icons/ai').then((module) => module.AiOutlineHeart));
const AiOutlineBell = dynamic(() => import('react-icons/ai').then((module) => module.AiOutlineBell));
const AiOutlineSearch = dynamic(() => import('react-icons/ai').then((module) => module.AiOutlineSearch));

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
    linkKey: '/cruises',
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
  const pathname = usePathname();
  const isCruisesPage = pathname === '/cruises';
  const session = useSession();

  return (
    <div className='relative flex flex-col items-center bg-secondary-header w-full'>
      <div
        className={`${
          isCruisesPage ? '' : 'absolute'
        } z-[10] h-[80px] opacity-1 transition-opacity duration-150 linear max-w-[1312px] w-full flex items-center`}
      >
        <Burger />
        <Link href='/'>
          <Image
            src={Logo}
            alt='Logo'
            width={158}
            height={80}
            className="h-auto ml-[36px]"
            priority={true}
            layout="fixed"
          />
        </Link>
        <div className='flex ml-[32px] items-center'>
          {headerLinksData?.map((link: any, i: number) => (
            <Link
              href={link.linkKey}
              key={i}
              prefetch
              className='text-white tracking-[2px] text-[14px] mr-[32px] font-[300]'
            >
              {link.textKey}
            </Link>
          ))}
          <div className='flex items-center ml-[100px]'>
            <AiOutlineHeart className='text-white mr-[24px]' />
            <AiOutlineBell className='text-white mr-[24px]' />
            {session.data?.user ? (
              <div className='text-white text-xs uppercase tracking-[1px] flex items-center'>
                <Image 
                  src={PreGold} 
                  alt='Pre Gold Status' 
                  className='mr-3'  
                  priority={true}
                  layout="fixed" width={27} height={31}
                />{' '}
                Hi, {session?.data?.user?.name?.split(' ')[0]}
              </div>
            ) : (
              <Link
                href='/account/signin'
                className='text-white tracking-[2px] text-[14px] mr-[32px] font-[300]'
                prefetch
              >
                SIGN IN
              </Link>
            )}
          </div>
        </div>
        {!session.data?.user && <AiOutlineSearch className='text-white' />}
      </div>
    </div>
  );
};

export default Header;
