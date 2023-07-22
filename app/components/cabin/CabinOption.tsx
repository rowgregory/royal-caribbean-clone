'use client';

import dynamic from 'next/dynamic';
import ContinueButton from '../ContinueBtn';

const FaChevronRight = dynamic(() =>
  import('react-icons/fa').then((module) => module.FaChevronRight)
);

const CabinOption = ({ roomNumber, obj, setRoomNumber }: any) => {
  return (
    <div
      className={`h-16 px-8 flex justify-between items-center w-full ${
        roomNumber === obj.roomNumber ? 'bg-blue-100' : ''
      }`}
    >
      <div>{obj.roomNumber}</div>
      {roomNumber === obj.roomNumber ? (
        <ContinueButton
          payload={{ shipRoomNumber: obj.roomNumber }}
          step={3}
          href="/booking/guest-info"
          btnText="Select"
        />
      ) : (
        <div
          onClick={() => setRoomNumber(obj.roomNumber)}
          className="flex text-sm items-center text-blue-950 cursor-pointer"
        >
          Included
          <FaChevronRight className="text-blue-600 ml-2 text-sm" />
        </div>
      )}
    </div>
  );
};

export default CabinOption;
