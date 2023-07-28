import QuantitySelector from '@/app/components/QuantitySelector';
import dynamic from 'next/dynamic';

const AiOutlineMinus = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlineMinus)
);
const AiOutlinePlus = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlinePlus)
);

const ChildrenSelector = ({ handleQuantityChange, quantity }: any) => {
  return (
    <section className="flex items-center justify-between xl:justify-start w-full">
      <div className="block text-gray-600 xl:hidden">Children</div>
      <div className="pr-3">
        <div className="flex items-center bg-gray-100 w-fit h-[72px] p-3">
          <QuantitySelector
            handleChange={() => handleQuantityChange('children', -1)}
            quantity={quantity.children}
            icon={<AiOutlineMinus size="25px" className="font-thin" />}
            disable={quantity.children === 0}
          />
          <div className="text-3xl w-[50px] flex items-center justify-center">
            {quantity.children}
          </div>
          <QuantitySelector
            handleChange={() => handleQuantityChange('children', 1)}
            quantity={quantity.children}
            icon={
              <AiOutlinePlus size="25px" className="text-blue-700 font-thin" />
            }
            disable={quantity.children === 4}
          />
        </div>
      </div>
      <div className="hidden xl:block text-gray-600">Children</div>
    </section>
  );
};

export default ChildrenSelector;
