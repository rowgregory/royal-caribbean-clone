import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PerfectDayAtCocoCay = () => {
  return (
    <div className="max-w-[1920px] px-4 md:px-12 xl:px-[190px] relative w-full mx-auto my-20">
      <div className="relative w-full h-full rounded-md overflow-hidden mx-auto flex justify-center">
        <Image
          src="/perfect_day_1.jpeg"
          className="aspect-square md:aspect-auto w-full h-auto object-cover rounded-md"
          alt="Perfect Day"
          width="0"
          height="0"
          sizes="100vw"
          priority={true}
        />
        <div className="absolute inset-0 left-0 flex justify-center items-center flex-col">
          <p className="text-lg text-white tracking-widest text-thin">
            THIS IS A DAY UNLINE ANY OTHER
          </p>
          <p className="text-white font-kapra-condensed text-5xl">
            PERFECT DAY AT COCOCAY
          </p>
          <Link
            href="/cruises"
            className="bg-blue-600 tracking-wide font-[200] text-white text-sm px-4 py-2 mt-3 rounded-md w-fit"
          >
            EXPLORE MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerfectDayAtCocoCay;
