'use client';

import { useState } from 'react';
import ContinueButton from '../ContinueBtn';
import QuantityControls from './QuantityControls';

const RoomAmountSelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: any) => {
    setQuantity((prev: any) => prev + increment);
  };
  return (
    <div className="bg-white shadow-lg">
      <div className=" p-7 h-[132px]">
        <QuantityControls
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
        />
      </div>
      <div className="max-w-[932px] bg-gray-100 h-20 flex justify-end items-center pr-7">
        <ContinueButton
          payload={{ roomAmount: quantity }}
          step={2.1}
          href="/booking/occupancy"
        />
      </div>
    </div>
  );
};

export default RoomAmountSelector;
