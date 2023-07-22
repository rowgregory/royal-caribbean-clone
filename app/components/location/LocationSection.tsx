import ContinueButton from '../ContinueBtn';

const LocationSection = ({ obj }: any) => {
  return (
    <div
      className={`${obj.border} w-1/3 text-center pt-10 p-6 flex flex-col justify-between items-center`}
    >
      <div className="flex flex-col">
        <div className="text-2xl mb-3 text-gray-800">{obj.section}</div>
        <div className="text-xs text-gray-800">{obj.detail}</div>
      </div>
      <ContinueButton
        payload={{ shipSection: obj.section }}
        step={2.5}
        href="/booking/deck"
        btnText="Select"
      />
    </div>
  );
};

export default LocationSection;
