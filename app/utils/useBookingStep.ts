import { useEffect } from 'react';
import { useCruiseContext } from '../context/cruiseContext';

const useBookingStep = (step: number, rest?: any) => {
  const { setBookingStep , removeFieldsFromCruise} = useCruiseContext() as any;
  useEffect(() => {
    const handleBackNavigation = (event: any) => {
      if (event.button === 3 || (event.ctrlKey && event.button === 0)) {
        setBookingStep(step);
        if(rest) {
          removeFieldsFromCruise(rest)
        }
      }
    };

    document.addEventListener('mousedown', handleBackNavigation);

    return () => {
      document.removeEventListener('mousedown', handleBackNavigation);
    };
  }, [setBookingStep, step]);
}

export default useBookingStep;