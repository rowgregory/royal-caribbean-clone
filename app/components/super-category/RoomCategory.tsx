import Image from 'next/image';
import ContinueButton from '../ContinueBtn';

const RoomCategory = ({ room }: any) => {
  return (
    <div className="flex w-full h-[365px] mb-8 rounded-md shadow-lg relative">
      <Image
        className="w-1/2 object-cover"
        src={room.image}
        alt="Room Type"
        width={350}
        height={300}
      />
      <div className="absolute w-1/2 inset-0 text-white text-6xl font-kapra-condensed p-8">
        {room.type}
      </div>
      <div className="flex flex-col bg-white p-8">
        <div className="text-xs mb-2 text-blue-950">Avg USD/Person*</div>
        <div className="text-6xl font-kapra-condensed text-blue-950 mb-5">
          ${room.price}
        </div>
        <div className="text-light mb-9">{room.description}</div>
        <ContinueButton
          payload={{
            roomType: room.type,
            roomPrice: room.price,
            originalRoomPrice: room.originalPrice,
          }}
          step={2.3}
          href="/booking/pricing-options"
          btnText="Select"
        />
      </div>
    </div>
  );
};

export default RoomCategory;
