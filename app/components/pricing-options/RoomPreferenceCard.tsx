import ContinueButton from '../ContinueBtn';

const RoomPreferenceCard = ({ pref, cruise }: any) => {
  return (
    <div className="w-1/2 rounded-md shadow-md bg-white">
      <div className={`px-5 py-7 ${pref.titleBg} text-white text-2xl`}>
        {pref.title}
      </div>
      <div className="px-5 py-7 flex flex-col items-between w-full bg-white h-[290px]">
        <div className="flex h-full">
          <div className="w-7/12 font-light">{pref.description}</div>
          <div className="w-5/12 font-kapra-condensed text-6xl text-right text-blue-950">
            ${pref.price}
          </div>
        </div>
        <div className="flex flex-col items-end w-full">
          <hr className="border-t border-gray-300 w-full mt-4 mb-5" />
          <ContinueButton
            payload={{
              roomPreferenceType: pref?.title,
              subtotal:
                pref.price * (cruise?.guests?.adults + cruise?.guests?.children),
              pickYourRoomPrice: pref?.price,
            }}
            step={pref.title === 'We pick your room' ? 3 : 2.4}
            href={
              pref.title === 'We pick your room'
                ? '/booking/guest-info'
                : '/booking/location'
            }
            btnText="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomPreferenceCard;
