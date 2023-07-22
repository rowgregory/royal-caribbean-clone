'use client'

import {
  CruiseContextProps,
  useCruiseContext,
} from '@/app/context/cruiseContext';

const PriceInfo = () => {
  const { cruise } = useCruiseContext() as CruiseContextProps;
  return (
    <div className="flex flex-col justify-center items-end">
      <div className="text-sm">From USD* /Person</div>
      <div className="text-blue-950 mt-3 font-kapra-condensed text-7xl">
        ${cruise?.roomPrice}
      </div>
      <div className="text-sm font-light">
        was ${cruise?.originalRoomPrice}/Person
      </div>
    </div>
  );
};

export default PriceInfo;
