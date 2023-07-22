import QuantitySelector from '@/app/utils/QuantitySelector';
import dynamic from 'next/dynamic';

const AiOutlineMinus = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlineMinus)
);
const AiOutlinePlus = dynamic(() =>
  import('react-icons/ai').then((module) => module.AiOutlinePlus)
);

const QuantityControls = ({ quantity, handleQuantityChange }: any) => {
  return (
    <div className="flex items-center bg-gray-100 w-fit h-[72px] p-3">
      <QuantitySelector
        handleChange={() => handleQuantityChange(-1)}
        icon={<AiOutlineMinus size="25px" className="font-thin" />}
        disable={quantity === 1}
      />
      <div className="text-3xl w-[50px] flex items-center justify-center">
        {quantity}
      </div>
      <QuantitySelector
        handleChange={() => handleQuantityChange(1)}
        icon={<AiOutlinePlus size="25px" className="text-blue-700 font-thin" />}
        disable={quantity === 1}
      />
    </div>
  );
};

export default QuantityControls;
