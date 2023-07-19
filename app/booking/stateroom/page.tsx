'use client';

import { useCruiseContext } from '@/app/context/cruiseContext';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const StateroomPage = () => {
  const { setBookingStep, updateCruise } = useCruiseContext();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: any) => {
    setQuantity((prev: any) => prev + increment);
  };

  return (
    <div className='mx-16 pt-5 mb-10'>
      <h1 className='text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-2'>
        How many rooms do you need?
      </h1>
      <div className='text-gray-800 mb-9'>Most rooms sleep up to 4 guests</div>
      <div className='bg-white shadow-lg'>
        <div className=' p-7 h-[132px]'>
          <div className='flex items-center bg-gray-100 w-fit h-[72px] p-3'>
            <button
              className='w-[50px] flex items-center justify-center cursor-not-allowed'
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity === 1}
            >
              <AiOutlineMinus size='25px' className='font-thin' />
            </button>
            <div className='text-3xl w-[50px] flex items-center justify-center'>
              {quantity}
            </div>
            <button
              className='w-[50px] flex items-center justify-center cursor-not-allowed'
              onClick={() => handleQuantityChange(1)}
              disabled={quantity === 4}
            >
              <AiOutlinePlus size='25px' className='text-blue-700 font-thin' />
            </button>
          </div>
        </div>

        <div className='max-w-[932px] bg-gray-100 h-20 flex justify-end items-center pr-7'>
          <Link
            onClick={() => {
              updateCruise({ roomAmount: quantity });
              setBookingStep(2.1);
            }}
            href='/booking/occupancy'
            className='bg-blue-600 rounded-sm w-fit text-white flex items-center justify-center px-8 py-3'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StateroomPage;
