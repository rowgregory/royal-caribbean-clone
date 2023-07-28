import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LastCallOnCruiseDeals = () => {
  return (
    <div className="max-w-[1920px] px-4 md:px-12 xl:px-[190px]  relative w-full mx-auto my-20">
      <div className="relative w-full h-full rounded-md overflow-hidden mx-auto ">
        <Image
          src="/last_call.jpeg"
          className="aspect-square w-full h-full  lg:max-h-[250px] md:aspect-auto h-auto rounded-md object-cover"
          width="0"
          height="0"
          sizes="100vw"
          priority={true}
          alt="Last Call on Cruises"
        />

        <div className="absolute inset-0 left-0 p-4 flex justify-center flex-col">
          <p className="text-center text-xl md:text-left lg:text-4xl text-white font-kapra-condensed">
            LAST CALL ON CRUISE DEALS
          </p>
          <p className="text-center text-sm md:text-left text-md text-white font-light tracking-[1px]">
            SCORE BIG SAVINGS ON LAST MINUTE CRUISES
          </p>
          <Link
            href="/cruises"
            className="mx-auto text-center md:text-left md:ml-0 bg-yellow-300 font-light text-black text-sm px-5 py-2 mt-3 rounded-md w-fit"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LastCallOnCruiseDeals;
