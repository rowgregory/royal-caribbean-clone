'use client';

import { useCruiseContext } from '@/app/context/cruiseContext';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import AdultSelector from './AdultSelector';
import ChildrenSelector from './ChildrenSelector';
import ContinueButton from '../ContinueBtn';

const FaWheelchair = dynamic(() =>
  import('react-icons/fa').then((module) => module.FaWheelchair)
);

const OccupancySelector = () => {
  const { cruise } = useCruiseContext() as any;
  const [quantity, setQuantity] = useState({ adults: 1, children: 0 });
  const [handicap, setHandicap] = useState(false);

  const totalGuests = quantity.adults + quantity.children;
  const subtotal = cruise?.roomPrice * totalGuests;
  const taxes = 105 * totalGuests;

  const handleQuantityChange = (type: string, increment: number) => {
    setQuantity((prev: any) => ({
      ...prev,
      [type]: prev[type] + increment,
    }));
  };

  const handleHandicapChange = (event: any) => {
    setHandicap(event.target.checked);
  };

  return (

      <div className="bg-white shadow-lg">
        <div className="flex gap-8 p-7 flex-col">
          <div className="flex">
            <AdultSelector
              handleQuantityChange={handleQuantityChange}
              quantity={quantity}
            />
            <ChildrenSelector
              handleQuantityChange={handleQuantityChange}
              quantity={quantity}
            />
          </div>
          <hr className="border-t border-gray-300 w-full my-5" />
          <div className="flex justify-end items-center w-full text-gray-500 text-sm">
            I need an accessible room <FaWheelchair className="mx-2" />
            <input type="checkbox" onChange={handleHandicapChange} />
          </div>
        </div>
        <div className="max-w-[932px] bg-gray-100 h-20 flex justify-end items-center pr-7">
          <ContinueButton
            payload={{
              guests: {
                adults: quantity.adults,
                children: quantity.children,
              },
              handicapAccessibleRoom: handicap,
              subtotal,
              taxes,
            }}
            step={2.2}
            href="/booking/superCategory"
          />
        </div>
      </div>
  );
};

export default OccupancySelector;
