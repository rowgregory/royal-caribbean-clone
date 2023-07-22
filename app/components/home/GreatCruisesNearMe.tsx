import Image from 'next/image';
import React from 'react';

const cruisesNearMeData = [
  {
    image: "/cruises_near_me_1.jpeg",
    text1: 'CRUISES FROM',
    text2: 'FLORIDA',
    text3: 'STARTING FROM',
    text4: '$242',
  },
  {
    image: "/cruises_near_me_2.jpeg",
    text1: 'CRUISES FROM',
    text2: 'TEXTAS',
    text3: 'STARTING FROM',
    text4: '$272',
  },
  {
    image: "/cruises_near_me_3.jpeg",
    text1: 'CRUISES FROM',
    text2: 'CAPE LIBERTY',
    text3: 'STARTING FROM',
    text4: '$342',
  },
  {
    image: "/cruises_near_me_4.jpeg",
    text1: 'CRUISES FROM',
    text2: 'WEST COAST',
    text3: 'STARTING FROM',
    text4: '$225',
  },
];

const GreatCruisesNearMe = () => {
  return (
    <div className='max-w-[1920px] px-[190px] relative w-full mx-auto mb-40'>
      <h1 className='font-kapra-condensed text-[62px] leading-10'>
        GREAT CRUISES NEAR ME
      </h1>
      <p className='font-[200] mb-6'>
        You don’t have to travel far for an incredible vacation. Cruise from a
        port near you to top-rated vacation destinations in the tropics and
        beyond. No matter where in the world you’re sailing from, you’ll find
        plenty of deals on epic itineraries sailing right from your backyard.
      </p>
      <div className='grid grid-cols-4 gap-4 mb-10'>
        {cruisesNearMeData.map((cruise: any, i: number) => (
          <div className='relative' key={i}>
            <div className='relative w-full'>
              <Image
                src={cruise.image}
                alt='Cruise near me'
                className="w-full h-auto rounded-md"
                width="0"
                height="0"
                sizes="100vw"
                priority={true}
              />
              <div className='absolute inset-0 left-0 p-4 flex justify-center items-center flex-col w-full'>
                <p className='text-white text-xl'>{cruise.text1}</p>
                <p className='text-white font-[200] tracking-[1px] font-kapra-condensed text-5xl mt-2'>
                  {cruise.text2}
                </p>
                <p className='text-white font-[200] tracking-[1px] mb-2'>
                  {cruise.text3}
                </p>
                <p className='text-white font-[200] tracking-[1px] font-kapra-condensed text-5xl'>
                  {cruise.text4}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-t border-gray-300 w-full' />
    </div>
  );
};

export default GreatCruisesNearMe;
