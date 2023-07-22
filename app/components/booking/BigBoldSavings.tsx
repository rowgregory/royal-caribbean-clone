'use client';

import ContinueButton from '../ContinueBtn';
import DealSection from './DealSection';
import PriceInfo from './PriceInfo';

const BigBoldSavings = () => {
  return (
    <>
      <div className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-8">
        Big Bold Savings
      </div>
      <div className="bg-white shadow-lg flex flex-col w-full">
        <div className="flex justify-between p-7">
          <DealSection />
          <PriceInfo />
        </div>
        <div className="bg-gray-100 h-20 flex justify-end items-center pr-7">
          <ContinueButton  step={2} href="/booking/stateroom" />
        </div>
      </div>
    </>
  );
};

export default BigBoldSavings;
