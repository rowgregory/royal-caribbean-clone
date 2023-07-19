'use client'

import { useCruiseContext } from '@/app/context/cruiseContext';
import useBookingStep from '@/app/utils/useBookingStep';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaWheelchair } from 'react-icons/fa';

const OccupancyPage = () => {
  const { updateCruise, setBookingStep, cruise } = useCruiseContext() as any;
  const [quantity, setQuantity] = useState({ adults: 1, children: 0 });
  const [handicap, setHandicap] = useState(false);

  useBookingStep(2);

  const totalGuests = quantity.adults + quantity.children;
  const subtotal = cruise?.roomPrice * totalGuests;
  const taxes = 105 * totalGuests;

  const handleQuantityChange = (type: string, increment: number) => {
    setQuantity(prev => ({
      ...prev,
      [type]: prev[type] + increment,
    }));
  };

  const handleHandicapChange = (event: any) => {
    setHandicap(event.target.checked);
  };

  return (
    <div className='mx-16 pt-5 mb-10'>
      <h1 className='text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2'>
        How many guests are in your room?
      </h1>
      <div className='text-gray-800 mb-9'>Most rooms sleep up to 4 guests</div>
      <div className='bg-white shadow-lg'>
        <div className='flex gap-8 p-7 flex-col'>
          <div className='flex'>
            <section className='flex items-center mr-20'>
              <div className='pr-3'>
                <div className='flex items-center bg-gray-100 w-fit h-[72px] p-3'>
                  <button
                    className='w-[50px] flex items-center justify-center'
                    onClick={() => handleQuantityChange('adults', -1)}
                    disabled={quantity.adults === 1}
                  >
                    <AiOutlineMinus size='25px' className='font-thin' />
                  </button>
                  <div className='text-3xl w-[50px] flex items-center justify-center'>
                    {quantity.adults}
                  </div>
                  <button
                    className='w-[50px] flex items-center justify-center'
                    onClick={() => handleQuantityChange('adults', 1)}
                    disabled={quantity.adults === 4}
                  >
                    <AiOutlinePlus
                      size='25px'
                      className='text-blue-700 font-thin'
                    />
                  </button>
                </div>
              </div>
              <div className='text-gray-600'>Adults</div>
            </section>
            <section className='flex items-center'>
              <div className='pr-3'>
                <div className='flex items-center bg-gray-100 w-fit h-[72px] p-3'>
                  <button
                    className='w-[50px] flex items-center justify-center'
                    onClick={() => handleQuantityChange('children', -1)}
                    disabled={quantity.children === 0}
                  >
                    <AiOutlineMinus size='25px' className='font-thin' />
                  </button>
                  <div className='text-3xl w-[50px] flex items-center justify-center'>
                    {quantity.children}
                  </div>
                  <button
                    className='w-[50px] flex items-center justify-center'
                    onClick={() => handleQuantityChange('children', 1)}
                    disabled={quantity.children === 4}
                  >
                    <AiOutlinePlus
                      size='25px'
                      className='text-blue-700 font-thin'
                    />
                  </button>
                </div>
              </div>
              <div className='text-gray-600'>Children</div>
            </section>
          </div>
          <hr className='border-t border-gray-300 w-full my-5' />
          <div className='flex justify-end items-center w-full text-gray-500 text-sm'>
            I need an accessible room <FaWheelchair className='mx-2' />
            <input
              type='checkbox'
              onChange={handleHandicapChange}
            />
          </div>
        </div>
        <div className='max-w-[932px] bg-gray-100 h-20 flex justify-end items-center pr-7'>
          <Link
            onClick={() => {
              updateCruise({
                guests: {
                  adults: quantity.adults,
                  children: quantity.children,
                },
                handicapAccessibleRoom: handicap,
                subtotal,
                taxes
              });
              setBookingStep(2.2);
            }}
            href='/booking/superCategory'
            className='bg-blue-600 rounded-sm w-fit text-white flex items-center justify-center px-8 py-3'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OccupancyPage;
