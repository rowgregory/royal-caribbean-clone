import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-700 mx-auto w-full">
      <div className="w-full max-w-7xl mx-auto px-6 pb-5">
        <p className="text-white text-xs py-5">
          *Please see all applicable Terms & Conditions for Promotions here.
        </p>
        <hr className="border-t border-zinc-600 w-full " />
      </div>
      <Image
        src="/rcg-logo-vertical.svg"
        alt="RC-vertical-logo"
        className="w-60 mx-auto my-20"
        width="0"
        height="0"
        priority={true}
      />
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full pb-10 px-6">
        <Image
          src="/footer_1.svg"
          alt="royal caribbean"
          className="w-28"
          width="0"
          height="0"
          priority={true}
        />
        <Image
          src="/footer_2.svg"
          alt="celebrity cruises"
          className="w-28"
          width="0"
          height="0"
          priority={true}
        />
        <Image
          src="/footer_3.svg"
          alt="silversea"
          className="w-28"
          width="0"
          height="0"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Footer;
