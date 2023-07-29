'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaChevronDown,
  FaChevronLeft,
  FaChevronUp,
} from 'react-icons/fa';

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
  'Hawaii',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const MonthGrid = ({ selectedMonths, onMonthClick, year }: any) => {
  return (
    <div className="flex items-center flex-col my-10">
      <div className="text-white mb-4 text-xl font-thin">{year}</div>
      <div className="grid grid-cols-4 gap-2 w-full md:w-auto">
        {months.map((month) => {
          const isSelected = selectedMonths.some(
            (item: any) => item.month === month && item.year === year
          );

          const isBetweenSelectedMonths =
            selectedMonths.length === 2 &&
            months.indexOf(month) > months.indexOf(selectedMonths[0].month) &&
            months.indexOf(month) < months.indexOf(selectedMonths[1].month) &&
            selectedMonths.every((item: any) => item.year === year);

          return (
            <div
              key={month}
              onClick={() => {
                if (isBetweenSelectedMonths) return;

                const pair = { month, year };
                let updatedSelectedMonths;

                if (isSelected) {
                  updatedSelectedMonths = selectedMonths.filter(
                    (item: any) => !(item.month === month && item.year === year)
                  );
                } else {
                  if (selectedMonths.length >= 2) {
                    updatedSelectedMonths = selectedMonths.slice(1);
                  } else {
                    updatedSelectedMonths = selectedMonths;
                  }

                  updatedSelectedMonths = [...updatedSelectedMonths, pair];
                }

                onMonthClick(updatedSelectedMonths);
              }}
              className={`${
                isSelected || isBetweenSelectedMonths
                  ? 'text-[#2b78e2]'
                  : 'text-white'
              } font-light text-[16px] h-10 w-10 cursor-pointer ${
                isSelected
                  ? 'bg-white'
                  : isBetweenSelectedMonths
                  ? 'bg-gray-300'
                  : ''
              } ${
                isBetweenSelectedMonths ? '' : 'rounded-full'
              } flex justify-center items-center text-sm mx-auto`}
            >
              {month}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const departingFromData = ['Miami'];

const CruiseSeachWidget = () => {
  const [dropDownType, setDropDownType] = useState('');
  const [selectLocation, setSelectLocation] = useState([]) as any;
  const [departingFromCities, setDepartingFromCities] = useState([]) as any;
  const [leavingMonths, setLeavingMonths] = useState([]) as any;

  return (
    <div className="flex flex-col max-w-[1329px] mx-auto relative justify-center">
      <div className="mx-auto items-center grid gap-1 absolute top-[-70px] w-[90%] bg-white grid-cols-1 sm:gap-3 md:grid-cols-4 md:top-[0px] relative gap-6 md:shadow-[0px_10px_10px_rgba(6,21,86,0.15)]">
        <div className="tracking-[2px] text-gray-700 uppercase font-semibold text-xl text-center pt-6 pb-2 md:hidden">
          Find a Cruise
        </div>
        <div
          onClick={() =>
            setDropDownType(dropDownType !== 'cruising-to' ? 'cruising-to' : '')
          }
          className={`flex justify-between items-center pl-6 py-3 md:py-6 pr-0 lg:p-6 ${
            dropDownType === 'cruising-to'
              ? 'md:border-b-8 border-solid border-gray-300'
              : 'md:border-b-8 border-solid border-transparent'
          }`}
        >
          <div className="flex flex-col cursor-pointer">
            <div className="text-[10px] tracking-[1.5px] text-[#959595]">
              CRUISING TO
            </div>
            <div className="text-[#025ddc]">
              {selectLocation?.length === 0
                ? 'Any Destination'
                : selectLocation[0]}
            </div>
          </div>
          {selectLocation?.length > 1 ? (
            <div className="text-[#025ddc] bg-[#e3e3e3] h-[30px] w-[30px] rounded-full flex justify-center items-center">
              +{selectLocation?.length}
            </div>
          ) : dropDownType === 'cruising-to' ? (
            <FaChevronUp className="text-[#025ddc]" />
          ) : (
            <FaChevronDown className="text-[#025ddc]" />
          )}
        </div>
        <div
          onClick={() =>
            setDropDownType(
              dropDownType !== 'departing-from' ? 'departing-from' : ''
            )
          }
          className={`flex justify-between items-center pl-6 py-3 md:py-6 pr-0 lg:p-6  ${
            dropDownType === 'departing-from'
              ? 'border-0 md:border-b-8 border-gray-300'
              : 'border-0 md:border-b-8 border-solid border-transparent'
          }`}
        >
          <div className="flex flex-col cursor-pointer">
            <div className="text-[10px] tracking-[1.5px] text-[#959595]">
              DEPARTING FROM
            </div>
            <div className="text-[#025ddc]">
              {departingFromCities?.length === 0
                ? 'Any Destination'
                : departingFromCities[0]}
            </div>
          </div>
          {departingFromCities?.length > 1 ? (
            <div className="text-[#025ddc] bg-[#e3e3e3] h-[30px] w-[30px] rounded-full flex justify-center items-center">
              +{departingFromCities?.length}
            </div>
          ) : dropDownType == 'departing-from' ? (
            <FaChevronUp className="text-[#025ddc]" />
          ) : (
            <FaChevronDown className="text-[#025ddc]" />
          )}
        </div>
        <div
          onClick={() =>
            setDropDownType(dropDownType !== 'leaving' ? 'leaving' : '')
          }
          className={`flex justify-between items-center pl-6 py-3 md:py-6 md:pr-0 lg:p-6 ${
            dropDownType === 'leaving'
              ? 'border-0 md:border-b-8 border-gray-300'
              : 'border-0 md:border-b-8 border-solid border-transparent'
          }`}
        >
          <div className="flex flex-col cursor-pointer">
            <div className="text-[10px] tracking-[1.5px] text-[#959595]">
              LEAVING
            </div>
            <div className="text-[#025ddc]">
              {leavingMonths?.length === 0
                ? 'Any Date'
                : `${leavingMonths[0]?.month} '${leavingMonths[0]?.year?.slice(
                    2,
                    4
                  )}`}
              {leavingMonths?.length > 1 &&
                ` - ${leavingMonths[1]?.month} '${leavingMonths[1]?.year?.slice(
                  2,
                  4
                )}`}
            </div>
          </div>
          <FaCalendarAlt className="text-[#025ddc]" />
        </div>
        <Link
          href="/cruises"
          className="bg-[#025ddc] w-[165px] text-white tracking-[2px] flex items-center justify-center py-3 text-xs rounded-sm mx-auto lg:mr-4 font-extralight"
        >
          SEARCH CRUISES
        </Link>
      </div>
      {/* Desktop Cruise To */}
      {dropDownType === 'cruising-to' && (
        <div className="hidden md:grid grid-cols-4 mx-auto gap-2 max-h-[312px] h-full w-full max-w-[1329px] bg-[#025ddc] p-5">
          {cruisingToData?.map((dest: string, i: number) => (
            <div
              onClick={() =>
                setSelectLocation((prev: any) =>
                  prev.includes(dest)
                    ? selectLocation.filter((loc: string) => loc !== dest)
                    : [...prev, dest]
                )
              }
              className={`flex flex-col w-fit text-${
                selectLocation.includes(dest) ? '[#025ddc]' : 'white'
              } py-3 px-6 font-[200] text-[16px] cursor-pointer bg-${
                selectLocation.includes(dest) ? 'white' : ''
              } rounded-md`}
              key={i}
            >
              {dest}
            </div>
          ))}
        </div>
      )}
      {/* Mobile Cruise To */}
      {dropDownType === 'cruising-to' && (
        <>
          <div className="fixed z-[300] top-0 grid grid-cols-1 mx-auto gap-2 h-full w-full bg-[#025ddc] md:hidden">
            <div className="flex bg-white justify-between items-center py-3 px-6">
              <FaChevronLeft
                onClick={() => setDropDownType('')}
                className="text-blue-500"
              />
              <div className="text-gray-700 font-thin">Select Destination</div>
              <div
                onClick={() => setDropDownType('')}
                className="uppercase text-blue-500"
              >
                Apply
              </div>
            </div>
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
                } w-full`}
                key={i}
              >
                {dest}
              </div>
            ))}
          </div>
        </>
      )}
      {/* Desktop Departing From */}
      {dropDownType === 'departing-from' && (
        <div className="hidden md:grid grid-cols-4 mx-auto gap-2 max-h-[312px] h-full w-full max-w-[1329px] bg-[#025ddc] p-5">
          {departingFromData?.map((dest: string, i: number) => (
            <div
              onClick={() =>
                setDepartingFromCities((prev: any) =>
                  prev.includes(dest)
                    ? departingFromCities.filter((loc: string) => loc !== dest)
                    : [...prev, dest]
                )
              }
              className={`flex flex-col w-fit text-${
                departingFromCities.includes(dest) ? '[#025ddc]' : 'white'
              } py-3 px-6 font-[200] text-[16px] cursor-pointer bg-${
                departingFromCities.includes(dest) ? 'white' : ''
              } rounded-md`}
              key={i}
            >
              {dest}
            </div>
          ))}
        </div>
      )}
      {/* Mobile Departing From */}
      {dropDownType === 'departing-from' && (
        <>
          <div className="fixed z-[300] top-0 mx-auto gap-2 h-full w-full bg-[#025ddc] md:hidden">
            <div className="flex bg-white justify-between items-center py-3 px-6 h-12">
              <FaChevronLeft
                onClick={() => setDropDownType('')}
                className="text-blue-500"
              />
              <div className="text-gray-700 font-thin">
                Select Departure Ports
              </div>
              <div
                onClick={() => setDropDownType('')}
                className="uppercase text-blue-500"
              >
                Apply
              </div>
            </div>
            {departingFromData?.map((dest: string, i: number) => (
              <div
                onClick={() =>
                  setDepartingFromCities((prev: any) =>
                    prev.includes(dest)
                      ? departingFromCities.filter(
                          (loc: string) => loc !== dest
                        )
                      : [...prev, dest]
                  )
                }
                className={`h-12 flex flex-col w-fit text-${
                  departingFromCities.includes(dest) ? '[#025ddc]' : 'white'
                } py-3 px-6 font-[200] text-[16px] cursor-pointer bg-${
                  departingFromCities.includes(dest) ? 'white' : ''
                } w-full`}
                key={i}
              >
                {dest}
              </div>
            ))}
          </div>
        </>
      )}
      {/* Desking Leaving */}
      {dropDownType === 'leaving' && (
        <div className="hidden md:flex justify-center items-center h-[375px] h-full w-full max-w-[1329px] bg-[#025ddc] p-5">
          <div className="max-w-[900px] w-full grid grid-cols-3 mx-auto gap-12">
            <MonthGrid
              selectedMonths={leavingMonths}
              onMonthClick={setLeavingMonths}
              year="2023"
            />
            <MonthGrid
              selectedMonths={leavingMonths}
              onMonthClick={setLeavingMonths}
              year="2024"
            />
            <MonthGrid
              selectedMonths={leavingMonths}
              onMonthClick={setLeavingMonths}
              year="2025"
            />
          </div>
        </div>
      )}
      {/* Mobile Leaving */}
      {dropDownType === 'leaving' && (
        <>
          <div className="fixed z-[300] top-0 mx-auto gap-2 h-full w-full bg-[#025ddc] md:hidden">
            <div className="flex bg-white justify-between items-center py-3 px-6 h-12">
              <FaChevronLeft
                onClick={() => setDropDownType('')}
                className="text-blue-500"
              />
              <div className="text-gray-700 font-thin">Select Travel Dates</div>
              <div
                onClick={() => setDropDownType('')}
                className="uppercase text-blue-500"
              >
                Apply
              </div>
            </div>
            <MonthGrid
              selectedMonths={leavingMonths}
              onMonthClick={setLeavingMonths}
              year="2023"
            />
            <MonthGrid
              selectedMonths={leavingMonths}
              onMonthClick={setLeavingMonths}
              year="2024"
            />
            <MonthGrid
              selectedMonths={leavingMonths}
              onMonthClick={setLeavingMonths}
              year="2025"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CruiseSeachWidget;
