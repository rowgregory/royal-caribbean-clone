'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useCruiseContext } from '../context/cruiseContext';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/booking/Sidebar';

const Header = () => {
  return (
    <header className="h-[60px] bg-blue-900 flex items-center pl-6">
      <Image
        src="/logo-white.png"
        alt="Royal Caribbean"
        className="h-[35px] w-[35px] object-cover"
        width="0"
        height="0"
        sizes="100vw"
        priority={true}
      />
    </header>
  );
};

const MainContent = ({ children }: any) => {
  return <main className="w-[calc(1440px-380px)] w-full">{children}</main>;
};

const BookingLayout = ({ children }: any) => {
  // const router = useRouter();
  // const { successPay } = useCruiseContext() as any;

  // useEffect(() => {
  //   if (successPay) router.push('/booking/complete');
  // }, [successPay, router]);

  return (
    <div className="bg-[#f7f8f9] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        <Header />
        <div className="flex w-full max-w-[1440px]">
          <Sidebar />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </div>
  );
};

export default BookingLayout;
