import CruiseCard from './CruiseCard';
import cruises from '../../data/cruises.json';

const CruiseList = ({ onCruiseCardClick }: any) => (
  <div className="w-full max-w-[1220px] mt-8">
    {cruises?.map((cruise: any, i: number) => (
      <CruiseCard key={i} cruise={cruise} onClick={onCruiseCardClick} />
    ))}
  </div>
);

export default CruiseList;
