import { FaCreditCard } from 'react-icons/fa';

const Payment = ({ step }: any) => {
  return (
    <div
      className={`${
        5 === step ? 'border-l-4 inset-0 border-cyan-600' : ''
      } flex items-center h-12 pl-8`}
    >
      <div className={`w-8 ${5 === step ? '-mx-[4px]' : ''}`}>
        <FaCreditCard />
      </div>
      <div className={`font-light ${5 === step ? '-mx-[4px]' : ''}`}>
        Payment
      </div>
    </div>
  );
};

export default Payment;
