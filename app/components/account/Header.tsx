import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = ({ user }: any) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <header className="h-20 bg-blue-600 w-full flex items-center justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center mr-5">
        <Link href="/">
          <Image
            src="/logo-white.png"
            alt="Royal Caribbean"
            className="object-cover w-10 h-auto"
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
          />
        </Link>
        <div>
          <div
            onClick={() => setDropDown(!dropDown)}
            className="text-blue-600 flex justify-center items-center font-bold text-sm rounded-full uppercase bg-white h-[35px] w-[35px] cursor-pointer"
          >
            {user?.email?.slice(0, 2)}
          </div>
          <div className="relative">
            {dropDown && (
              <div className="absolute right-0 top-8 w-28 py-2 z-10 bg-white rounded-md flex items-center justify-center">
                <Link
                  className="hover:text-blue-500 duration-300"
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
        </div>
      </div>
    </header>
  );
};

export default Header;
