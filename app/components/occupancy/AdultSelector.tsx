import QuantitySelector from '@/app/components/QuantitySelector';
import dynamic from 'next/dynamic';

const AiOutlineMinus = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlineMinus)
);
const AiOutlinePlus = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlinePlus)
);

const AdultSelector = ({ handleQuantityChange, quantity }: any) => {
  return (
    <section className="flex items-center justify-between mb-8 xl:justify-start xl:mb-0 w-full mr-20">
      <div className="block text-gray-600 xl:hidden">Adults</div>
      <div className="pr-3">
        <div className="flex items-center bg-gray-100 w-fit h-[72px] p-3">
          <QuantitySelector
            handleChange={() => handleQuantityChange('adults', -1)}
            icon={<AiOutlineMinus size="25px" className="font-thin" />}
            disable={quantity.adults === 1}
          />
          <div className="text-3xl w-[50px] flex items-center justify-center">
            {quantity.adults}
          </div>
          <QuantitySelector
            handleChange={() => handleQuantityChange('adults', 1)}
            icon={
              <AiOutlinePlus size="25px" className="text-blue-700 font-thin" />
            }
            disable={quantity.adults === 4}
          />
        </div>
      </div>
      <div className="hidden xl:block text-gray-600">Adults</div>
    </section>
  );
};

export default AdultSelector;
