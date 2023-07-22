import { MdOutlineDinnerDining } from 'react-icons/md';

const DiningOptions = ({ step }: any) => {
  return (
    <div
      className={`${
        4 === step ? 'border-l-4 inset-0 border-cyan-600' : ''
      } flex items-center h-12 pl-8`}
    >
      <div className={`w-8 ${4 === step ? '-mx-[4px]' : ''}`}>
        <MdOutlineDinnerDining />
      </div>
      <div className={`font-light ${4 === step ? '-mx-[4px]' : ''}`}>
        Dining & Options
      </div>
    </div>
  );
};

export default DiningOptions;
