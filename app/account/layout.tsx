'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const AccountLayout = ({ children }: any) => {
  const [dropDown, setDropDown] = useState(false);
  const session = useSession() as any;

  const user = session?.data?.user;

  return (
    <>
      <header className="h-20 bg-blue-600 w-full flex items-center justify-center">
        <div className="w-full max-w-7xl flex justify-between items-center">
          <Image
            src="/logo-white.png"
            alt="Royal Caribbean"
            className="w-12"
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
          />
          <div
            onClick={() => setDropDown(!dropDown)}
            className="text-blue-600 flex justify-center items-center font-bold text-sm rounded-full uppercase bg-white h-[35px] w-[35px] cursor-pointer"
          >
            {user?.email?.slice(0, 2)}
          </div>
          {dropDown && (
            <div className="absolute px-6 py-3 right-20 top-16 z-10 bg-white rounded-md">
              <Link
                href="/signin"
                onClick={() => {
                  signOut({ callbackUrl: '/signin' });
                }}
              >
                Sign out
              </Link>
            </div>
          )}
        </div>
      </header>
      <section className="relative">
        <div className="relative">
          <Image
            src="/account_hero.jpeg"
            className="max-h-44 w-full object-cover"
            alt="Royal Caribbean Account Page"
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
          />
          <div className="absolute inset-0 max-w-[984px] w-full h-full flex items-center justify-between mx-auto">
            <div className="text-white font-medium text-5xl w-full">
              {user?.name?.split(' ')[0]}
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-b-grey-500 w-full h-[55px] flex items-center">
        <div className="max-w-[984px] w-full mx-auto">
          <Link className="mr-10 text-slate-400" href="/account">
            Upcoming cruises
          </Link>
          <Link className="mr-10 text-slate-400" href="/account/past-cruises">
            Past cruises
          </Link>
          <Link className="text-slate-400" href="/account/courtsey-holds">
            Courtsey holds
          </Link>
        </div>
      </section>
      {children}
    </>
  );
};

export default AccountLayout;
