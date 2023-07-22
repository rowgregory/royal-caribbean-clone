import { FaUser } from 'react-icons/fa';

const GuestInfo = ({ step }: any) => {
  return (
    <div
      className={`${
        3 === step ? 'border-l-4 inset-0 border-cyan-600' : ''
      } flex items-center h-12 pl-8`}
    >
      <div className={`w-8 ${3 === step ? '-mx-[4px]' : ''}`}>
        <FaUser />
      </div>
      <div className={`font-light `}>Guest Info</div>
    </div>
  );
};

export default GuestInfo;
