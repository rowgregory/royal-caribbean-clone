import {
  CruiseContextProps,
  useCruiseContext,
} from '@/app/context/cruiseContext';
import React from 'react';

const BottomSection = React.memo(() => {
  const { cruise, step } = useCruiseContext() as CruiseContextProps;
  return (
    step >= 3 && (
      <section className="p-8">
        <div className="text-blue-950 mb-5">Summary</div>
        <div className="flex justify-between items-center w-full mb-3 text-gray-700 text-sm">
          <div>Subtotal</div>
          <div>${cruise?.subtotal?.toFixed(2)}</div>
        </div>
        <div className="flex justify-between items-center w-full mb-3 text-gray-700 text-sm">
          <div>Taxes & fees</div>
          <div>${cruise?.taxes?.toFixed(2)}</div>
        </div>
        {step >= 5 && (
          <>
            <div className="flex justify-between items-center w-full mb-3 text-gray-700 text-sm">
              <div>Tip Tip Hooray</div>
              <div>${cruise?.tipTipHooray?.toFixed(2)}</div>
            </div>
            <div className="flex justify-between items-center w-full mb-3 text-gray-700 text-sm">
              <div>Vacation Protection</div>
              <div>${cruise?.vacationProtection?.toFixed(2)}</div>
            </div>
          </>
        )}
      </section>
    )
  );
});

BottomSection.displayName = 'BottomSection';
export default BottomSection;
