import DiningOptions from './DingingOptions';
import GuestInfo from './GuestInfo';
import Payment from './Payment';
import Staterooms from './Staterooms';

const IconSection = ({ cruise, step }: any) => {
  return (
    <div className="w-full mb-13">
      <Staterooms cruise={cruise} step={step} />
      <GuestInfo step={step} />
      <DiningOptions step={step} />
      <Payment step={step} />
    </div>
  );
};

export default IconSection;
