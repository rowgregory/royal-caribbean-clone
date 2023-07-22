import cabinData from '@/app/utils/cabinData';
import CabinOption from '@/app/components/cabin/CabinOption';

const CabinSection = ({ roomNumber, setRoomNumber }: any) => {
  return (
    <section className="relative">
      <div className="px-8 py-4 shadow-[0_0_0.5rem_0.0625rem_rgba(6,21,86,0.15)] rounded-tl-lg">
        Deck
      </div>
      {cabinData.map((obj: any, i: number) => (
        <CabinOption
          key={i}
          roomNumber={roomNumber}
          obj={obj}
          setRoomNumber={setRoomNumber}
        />
      ))}
    </section>
  );
};

export default CabinSection;
