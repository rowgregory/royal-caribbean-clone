'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import headerLinksData from '@/public/headerLinksData';
import Burger from '../components/header/Burger';
import { FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = ({ isCruisePage }: any) => {
  const session = useSession();
  const { t } = useTranslation('common');

  return (
    <nav>
      <div className="bg-secondary-header flex justify-center">
        <div
          className={`z-[10] h-[80px] flex items-center px-4 md:px-8 lg:px-20 container mx-auto justify-between max-w-[1440px] ${
            isCruisePage ? 'relative' : 'absolute'
          }`}
        >
          <section className="flex items-center block">
            <Burger />
            {/* Desktop Logo */}
            <Link href="/" className="hidden sm:hidden md:block">
              <Image
                src="/rc-logo.svg"
                alt="Logo"
                className="mx-8 w-160 h-43 cursor-pointer max-w-[200px]"
                priority={true}
                width={160}
                height={43}
              />
            </Link>
          </section>

          {/* Mobile Logo */}
          <Link href="/" className="block md:hidden">
            <Image
              src="/logo-white.png"
              alt="Logo"
              className="cursor-pointer mx-auto object-cover w-12 h-auto"
              priority={true}
              width="0"
              height="0"
              sizes="100vw"
            />
          </Link>

          {/* Mobile Phone Icon */}
          <Link href="/" className="block md:hidden">
            <FaPhone
              className="text-white"
              onClick={() => (window.location.href = 'facetime://8665627625')}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:hidden lg:flex items-center w-full">
            {headerLinksData(t)?.map((link: any, i: number) =>
              link.isLink ? (
                <Link
                  href={link.linkKey}
                  key={i}
                  prefetch
                  className="text-white tracking-[2px] text-[14px] font-[300] text-center pr-12"
                >
                  {link.textKey}
                </Link>
              ) : (
                <div
                  key={i}
                  className="text-white tracking-[2px] text-[14px] font-[300] text-center pr-12"
                >
                  {link.textKey}
                </div>
              )
            )}
          </div>

          {/* Desktop Signin */}
          <div className="hidden md:hidden lg:flex items-center justify-end w-2/12">
            {session.data?.user ? (
              <Link
                href="/account"
                className="text-white text-xs uppercase tracking-[1px] flex items-center"
              >
                <Image
                  src="/pre-gold.svg"
                  alt="Pre Gold Status"
                  className="mr-3"
                  priority={true}
                  width={27}
                  height={31}
                />{' '}
                Hi, {session?.data?.user?.name?.split(' ')[0]}
              </Link>
            ) : (
              <Link
                href="/signin"
                className="text-white tracking-[2px] text-[14px] font-[300]"
                prefetch
              >
                {t('header.signIn')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
