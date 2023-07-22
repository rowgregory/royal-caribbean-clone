import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import basicHomeCardData from '../../data/basicHomeCardData.json';

const oswald = Oswald({ subsets: ['latin'] });

const BasicHomeCards = () => {
  return (
    <div className="grid grid-cols-4 gap-3 max-w-[1329px] mx-auto mb-14">
      {basicHomeCardData.map((card: any, i: number) => (
        <Link href={card.linkKey} key={i}>
          <div className="relative">
            <Image
              src={card.image}
              alt={`${i}-${card.text1}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-md"
              priority={true}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h2 className={`text-sm tracking-[1px] font-[200]`}>
                {card.text1}
              </h2>
              <p className={`text-[32px] ${oswald.className}`}>{card.text2}</p>
              <p className="text-xs tracking-[1px]">{card.text3}</p>
              <p className={`text-[32px] ${oswald.className}`}>{card.text4}</p>
              <button className="text-xs bg-yellow-500 hover:bg-yellow-700 text-black py-3 tracking-[1px] px-7 rounded mt-2">
                {card.text5}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BasicHomeCards;
