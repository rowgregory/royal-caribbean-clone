import dynamic from 'next/dynamic';
import { AiFillTag } from 'react-icons/ai'

const DealSection = () => {
  return (
    <section className="flex flex-col">
      <div className="mb-3">
        These are the deals you&apos;ve snagged so far:
      </div>
      <div className="text-purple-600 mb-3 text-sm ml-5 flex items-center">
        <AiFillTag className="mr-2" /> 30% off every cruise
      </div>
      <div className="text-purple-600 mb-3 text-sm ml-5 flex items-center">
        <AiFillTag className="mr-2" /> Instant Savings Kicker
      </div>
      <div className="text-purple-600 mb-3 text-sm ml-5 flex items-center">
        <AiFillTag className="mr-2" /> Flash Sale Instant Savings
      </div>
    </section>
  );
};

export default DealSection;
