import Image from 'next/image';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import SelectCard1 from '../../assets/home/select_cruise_card_1.jpeg';
import SelectCard2 from '../../assets/home/select_cruise_card_2.jpeg';
import SelectCard3 from '../../assets/home/select_cruise_card_3.jpeg';
import SelectCard4 from '../../assets/home/select_cruise_card_4.jpeg';
import { FaMapPin, FaShip } from 'react-icons/fa';

const selectCruisesData = [
  {
    image: SelectCard1,
    text1: '3 Night Bahamas & Perfect Day',
    text2: 'Starting from*',
    text3: '$252/person',
    text4: 'Fort Lauderdale, Florida',
    text5: 'Liberty of the Seas',
    text6: 'View 29 dates',
  },
  {
    image: SelectCard2,
    text1: '3 Night Bahamas & Perfect Day Cruise',
    text2: 'Starting from*',
    text3: '$263/person',
    text4: 'Barcelona, Spain',
    text5: 'Symphony of the Seas',
    text6: 'View 12 dates',
  },
  {
    image: SelectCard3,
    text1: '4 Night Eastern Caribbean Cruise',
    text2: 'Starting from*',
    text3: '$242/person',
    text4: 'Miami, Florida',
    text5: 'Adventure of the Seas',
    text6: 'View 18 dates',
  },
  {
    image: SelectCard4,
    text1: '3 Night Perfect Day Getaway Cruise',
    text2: 'Starting from*',
    text3: '$271/person',
    text4: 'Galveston, Texas',
    text5: 'Navigator of the Seas',
    text6: 'View 15 dates',
  },
];

const SelectCruisesCards = () => {
  return (
    <div className='flex flex-col max-w-[1329px] mx-auto mb-14'>
      <div
        className={`font-kapra-condensed text-[60px] text-[#15264c] leading-[50px]`}
      >
        UP TO $650 OFF ON SELECT CRUISES
      </div>
      <div className='text-xl text-[#4a4a4a] mb-8'>
        Plus 30% off all cruises and kids sail free*
      </div>
      <div className='grid grid-cols-4 gap-3'>
        {selectCruisesData.map((cruise: any, i: number) => (
          <div
            key={i}
            className='card-container shadow-md rounded-md w-[310px]'
          >
            <div className='card-image'>
              <Image
                src={cruise.image}
                alt='Card Image'
                className='rounded-tl rounded-tr'
              />
            </div>
            <div className='card-content p-4 flex flex-col justify-between'>
              <h3 className='text-xl mb-2 text-[#15264c]'>{cruise.text1}</h3>
              <p className='text-sm text-[#656565]'>{cruise.text2}</p>
              <p className='text-2xl text-[#15264c] mb-2'>{cruise.text3}</p>
              <p className='text-xs flex items-center text-[#656565] mb-1'>
                <span className='mr-1'>
                  <FaMapPin />
                </span>
                {cruise.text4}
              </p>
              <p className='text-xs flex items-center text-[#656565]'>
                <span className='mr-1'>
                  <FaShip />
                </span>
                {cruise.text5}
              </p>
              <div className='card-dates flex items-center justify-end mt-2 text-[#025ddc] text-xs'>
                <p className='mr-1'>{cruise.text6}</p>
                <AiOutlineRight className='text-xs' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCruisesCards;
