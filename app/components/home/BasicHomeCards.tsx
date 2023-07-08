import React from 'react';
import CardImage1 from '../../assets/basic_home_card_1.jpeg';
import CardImage2 from '../../assets/basic_home_card_2.jpeg';
import CardImage3 from '../../assets/basic_home_card_3.jpeg';
import CardImage4 from '../../assets/basic_home_card_4.jpeg';
import Link from 'next/link';
import Image from 'next/image';
import { Oswald } from 'next/font/google';

const basicHomeCardData = [
  {
    image: CardImage1,
    text1: 'PERFECT DAY AT COCOCAY',
    text2: 'WEEKEND GETAWAYS',
    text3: 'STARTING FROM',
    text4: '$252',
    text5: 'BOOK NOW',
    linkKey: '',
  },
  {
    image: CardImage2,
    text1: '7 NIGHT',
    text2: 'CARIBBEAN CRUISES',
    text3: 'STARTING FROM',
    text4: '$436',
    text5: 'BOOK NOW',
    linkKey: '',
  },
  {
    image: CardImage3,
    text1: '2023-2024',
    text2: 'EUROPE CRUISES',
    text3: 'STARTING FROM',
    text4: '233',
    text5: 'BOOK NOW',
    linkKey: '',
  },
  {
    image: CardImage4,
    text1: '2023-2024',
    text2: 'ALASKA CRUISES',
    text3: 'STARTING FROM',
    text4: '349',
    text5: 'BOOK NOW',
    linkKey: '',
  },
];
const oswald = Oswald({ subsets: ['latin'] });
const BasicHomeCards = () => {
  return (
    <div className='grid grid-cols-4 gap-3 max-w-[1329px] mx-auto mb-14'>
      {basicHomeCardData.map((card: any, i: number) => (
        <Link href={card.linkKey} key={i}>
          <div className='relative'>
            <Image src={card.image} alt={`${i}-${card.text1}`} />
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center'>
              <h2 className={`text-sm tracking-[1px] font-[200]`}>
                {card.text1}
              </h2>
              <p className={`text-[32px] ${oswald.className}`}>{card.text2}</p>
              <p className='text-xs tracking-[1px]'>{card.text3}</p>
              <p className={`text-[32px] ${oswald.className}`}>{card.text4}</p>
              <button className='text-xs bg-yellow-500 hover:bg-yellow-700 text-black py-3 tracking-[1px] px-7 rounded mt-2'>
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
