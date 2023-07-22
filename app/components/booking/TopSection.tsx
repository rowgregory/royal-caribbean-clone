import {
  CruiseContextProps,
  useCruiseContext,
} from '@/app/context/cruiseContext';
import { AiOutlineArrowRight } from 'react-icons/ai';

const TopSection = ({ handleDetailsToggle }: any) => {
  const { cruise, step } = useCruiseContext() as CruiseContextProps;
  return (
    <section className="px-8">
      <div className="text-2xl text-blue-950 mb-5">
        {cruise?.amountOfNights} Night {cruise?.packageTitle}
      </div>
      <div className="text-gray-800 font-light mb-5">
        Leaving from {cruise?.directionCities}
        <br /> onboard {cruise?.shipName}
      </div>
      <div className="text-gray-800 flex items-center text-left font-normal text-sm">
        {cruise?.departDate} <AiOutlineArrowRight className="mx-2" />{' '}
        {cruise?.arrivalDate}
      </div>
      <div
        className="text-sm text-blue-800 font-light mt-5 cursor-pointer"
        onClick={handleDetailsToggle}
      >
        {step === 1
          ? ''
          : step >= 2
          ? 'View itinerary details'
          : 'View room details'}
      </div>
      <hr className="border-t border-gray-300 w-full my-5" />
    </section>
  );
};

export default TopSection;
