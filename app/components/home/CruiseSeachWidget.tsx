'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const cruisingToData = [
  'Mexico',
  'South Pacific',
  'Latin America',
  'Bahamas',
  'Caribbean',
  'Europe',
  'Transpacific',
  'Bermuda',
  'Pacific Northwest',
  'Panama Canal',
  'Transatlantic',
  'Alaska',
  'Asia',
  'Canada & New England',
  'Arabian Gulf',
  'Repositioning',
  'Hawaii',
];

const CruiseSeachWidget = () => {
  const [dropDownType, setDropDownType] = useState('');
  const [selectLocation, setSelectLocation] = useState([]) as any;

  return (
    <div className='d-flex max-w-[1329px] mx-auto'>
      <div className='w-full grid grid-cols-4 mx-auto h-[100px] items-center p-6 shadow-searchCruiseWidget'>
        <div
          onClick={() =>
            setDropDownType(dropDownType !== 'cruising-to' ? 'cruising-to' : '')
          }
          className='flex justify-between items-center'
        >
          <div className='flex flex-col cursor-pointer'>
            <div className='text-[10px] tracking-[1.5px] text-[#959595]'>
              CRUISING TO
            </div>
            <div className='text-[#025ddc]'>
              {selectLocation?.length === 0
                ? 'Any Destination'
                : selectLocation[0]}
            </div>
          </div>
          {selectLocation?.length > 1 ? (
            <div className='text-[#025ddc] bg-[#e3e3e3] h-[30px] w-[30px] rounded-full flex justify-center items-center'>
              +{selectLocation?.length}
            </div>
          ) : selectLocation?.length <= 1 && dropDownType !== '' ? (
            <FaChevronUp className='text-[#025ddc]' />
          ) : (
            <FaChevronDown className='text-[#025ddc]' />
          )}
        </div>
        <div
          onClick={() => setDropDownType('departing-from')}
          className='flex flex-col ml-[18px]'
        >
          <div className='text-[10px] tracking-[1.5px] text-[#959595]'>
            DEPARTING FROM
          </div>
        </div>
        <div
          onClick={() => setDropDownType('leaving')}
          className='flex flex-col ml-[18px]'
        >
          <div className='text-[10px] tracking-[1.5px] text-[#959595]'>
            LEAVING
          </div>
        </div>
        <div className='bg-[#025ddc] px-4 py-3 text-white tracking-[2px] text-[14px] rounded-sm'>
          SEARCH CRUISES
        </div>
      </div>
      {dropDownType === 'cruising-to' && (
        <div className='max-h-[312px] h-full w-full max-w-[1329px] bg-[#025ddc] p-5 grid grid-cols-4 mx-auto gap-2'>
          {cruisingToData?.map((dest: string, i: number) => (
            <div
              onClick={() =>
                setSelectLocation((prev: any) =>
                  prev.includes(dest)
                    ? selectLocation.filter((loc: string) => loc !== dest)
                    : [...prev, dest]
                )
              }
              className={`flex flex-col text-${
                selectLocation.includes(dest) ? '[#025ddc]' : 'white'
              } py-3 px-6 font-[200] text-[16px] cursor-pointer bg-${
                selectLocation.includes(dest) ? 'white' : ''
              } rounded-md`}
              key={i}
              style={{ width: 'fit-content' }}
            >
              {dest}
            </div>
          ))}
        </div>
      )}
      <div className='text-[13px] text-[#838383] mt-4 mb-8'>
        Good news! You may be eligible for a Resident Discount.{' '}
        <span className='text-[13px] text-[#025ddc]'>
          Please select your State of residence
        </span>
      </div>
    </div>
  );
};

export default CruiseSeachWidget;
