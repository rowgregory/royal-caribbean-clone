'use client';

import Link from 'next/link';
import { useCruiseContext, CruiseContextProps } from '../context/cruiseContext';

const ContinueButton = ({ payload, step, href, btnText }: any) => {
  const { updateCruise, setBookingStep } =
    useCruiseContext() as CruiseContextProps;
  return (
    <Link
      href={href}
      onClick={() => {
        payload && updateCruise(payload);
        setBookingStep(step);
      }}
      className="bg-blue-600 rounded-sm w-full md:w-fit text-white flex items-center justify-center px-8 py-3"
    >
      {btnText === 'Select' ? 'Select' : 'Continue'}
    </Link>
  );
};

export default ContinueButton;
