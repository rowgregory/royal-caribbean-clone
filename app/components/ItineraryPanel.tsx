'use client';

import React, { useMemo, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaShip } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useCruiseContext } from '../context/cruiseContext';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';

const ItineraryPanel = React.memo(({ openItineraryPanel, cruise }: any) => {
  const [roomType, setRoomType] = useState('Interior');
  const { addCruise, setBookingStep } = useCruiseContext();

  const {
    availableDates,
    share,
    like,
    terms,
    perPerson,
    pill,
    image,
    cruiseOptions,
    price,
    ...rest
  } = cruise;

  // Memoized data transformation
  const cruiseDetails = useMemo(() => {
    return cruise?.availableDates?.map((dates: any) => {
      const selectedRoom = dates?.rooms?.find(
        (room: any) => room.type === roomType
      );
      const { description, image, ...props } = selectedRoom;

      return {
        dateId: dates.id,
        sailDate: dates.date,
        departDate: dates.departDate,
        arrivalDate: dates.arrivalDate,
        roomPrice: props.price,
        roomType: props.type,
        originalRoomPrice: props.originalPrice,
        ...rest,
      };
    });
  }, [cruise, rest, roomType]);

  const handleBookingClick = (details: any) => {

    setBookingStep(1);
    addCruise(details);
  };

  return (<>
    <div
      className={`${
        openItineraryPanel
          ? 'transform translate-x-[0px]'
          : 'transform translate-x-[565px]'
      } transition duration-300 w-full right-0 max-w-[565px] z-[15] fixed min-h-screen bg-white overflow-hidden`}
    >
      <section className="px-5 mt-4 w-full">
        <div className="flex justify-between">
          <div className="flex">
            <AiOutlineHeart className="w-6 h-6" />
            <FiShare className="w-6 h-6" />
          </div>
          <MdClose className="w-6 h-6" />
        </div>
      </section>
      <section className="px-5 mt-6">
        <div className="font-bold text-lg">{cruise?.amountOfNights} NIGHTS</div>
        <div className="text-2xl mb-5">{cruise?.packageTitle}</div>
        <div className="flex items-center mb-5">
          <FaShip className="mr-2" />
          {cruise?.shipName}
        </div>
        <div className="text-xs mb-3">
          {cruise?.direction}: {cruise?.directionCities}
        </div>
        <ul className="list-none text-xs mb-3 flex flex-wrap">
          VISITING:
          {cruise?.countriesVisiting?.map((country: any, i: number) => (
            <li key={i}>
              &nbsp;{country}{' '}
              {i !== cruise.countriesVisiting.length - 1 && <>&#8226;</>}
            </li>
          ))}
        </ul>
      </section>
      <section className="px-5 mt-4 w-full">
        <div className="font-bold">
          {cruise?.availableDates?.length} available dates
        </div>
        <div className="flex justify-between w-full mt-4">
          {cruise?.availableDates && cruise?.availableDates[0]?.rooms?.map((room: any, i: number) => (
            <div
              key={i}
              className={`${
                room.type === roomType ? 'border-b-4 border-blue-600' : ''
              } flex flex-col items-center px-2 cursor-pointer`}
              onClick={() => setRoomType(room.type)}
            >
              <div
                className={`${
                  room.type === roomType ? 'text-blue-600' : ''
                } uppercase text-sm font-semibold`}
              >
                {room.type}
              </div>
              <div
                className={`${
                  room.type === roomType ? 'text-blue-600' : ''
                } text-xs font-semibold my-2`}
              >
                ${room.price}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-sm text-purple-600 py-3 px-5 bg-gray-100 font-semibold">
        Lowest available rate
      </div>
      <div>
        {cruiseDetails?.map((details: any, i: number) => {
          return (
            <Link
              href="/booking"
              onClick={() => handleBookingClick(details)}
              key={i}
            >
              <div className="grid grid-cols-4 items-center justify-between px-5 py-4 hover:bg-yellow-400 transition duration-300 cursor-pointer">
                <div className="text-sm">{details?.sailDate}</div>

                <div
                  className={`text-2xl text-center ${
                    i === 0 ? 'text-purple-600' : ''
                  }`}
                >
                  ${details?.roomPrice}
                </div>
              </div>
              <div className="w-full h-7 bg-gray-100"></div>
            </Link>
          );
        })}
      </div>
    </div></>
  );
});
ItineraryPanel.displayName = 'ItineraryPanel';
export default ItineraryPanel;
