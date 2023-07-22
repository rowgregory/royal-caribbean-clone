'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import headerLinksData from '@/public/headerLinksData';
import Burger from '../components/header/Burger';

const AiOutlineHeart = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlineHeart)
);
const AiOutlineBell = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlineBell)
);
const AiOutlineSearch = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlineSearch)
);

const Header = () => {
  const pathname = usePathname();
  const isCruisesPage = pathname === '/cruises';
  const session = useSession();

  return (
    <div className="relative flex flex-col items-center bg-secondary-header w-full">
      <div
        className={`${
          isCruisesPage ? '' : 'absolute'
        } z-[10] h-[80px] opacity-1 transition-opacity duration-150 linear max-w-[1312px] w-full flex items-center justify-between`}
      >
        <Burger />
        <Link href="/">
          <Image
            src="/rc-logo.svg"
            alt="Logo"
            className="ml-[36px] w-40 h-auto"
            priority={true}
            width="0"
            height="0"
            sizes="100vw"
          />
        </Link>
        <div className="flex ml-[32px] items-center">
          {headerLinksData?.map((link: any, i: number) => (
            <Link
              href={link.linkKey}
              key={i}
              prefetch
              className="text-white tracking-[2px] text-[14px] mr-[32px] font-[300]"
            >
              {link.textKey}
            </Link>
          ))}
          <div className="flex items-center ml-[100px]">
            <AiOutlineHeart className="text-white mr-[24px]" />
            <AiOutlineBell className="text-white mr-[24px]" />
            {session.data?.user ? (
              <div className="text-white text-xs uppercase tracking-[1px] flex items-center">
                <Image
                  src="/pre-gold.svg"
                  alt="Pre Gold Status"
                  className="mr-3"
                  priority={true}
                  width={27}
                  height={31}
                />{' '}
                Hi, {session?.data?.user?.name?.split(' ')[0]}
              </div>
            ) : (
              <Link
                href="/signin"
                className="text-white tracking-[2px] text-[14px] mr-[32px] font-[300]"
                prefetch
              >
                SIGN IN
              </Link>
            )}
          </div>
        </div>
        {!session.data?.user && <AiOutlineSearch className="text-white" />}
      </div>
    </div>
  );
};

export default Header;
