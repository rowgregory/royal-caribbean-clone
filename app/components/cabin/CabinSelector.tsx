import CabinSVG from './CabinSVG';

const CabinSelector = ({ roomNumber, setRoomNumber }: any) => {
  return (
    <div className="overflow-y-scroll w-full max-w-[930px] h-[370px] mx-auto hide-scrollbar">
      <CabinSVG roomNumber={roomNumber} setRoomNumber={setRoomNumber} />
    </div>
  );
};

export default CabinSelector;
