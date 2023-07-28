import Image from 'next/image';
import { FaShip } from 'react-icons/fa';

const CruiseCard = ({ cruise, onClick }: any) => (
  <div
    key={cruise.packageTitle}
    className="h-full flex flex-col md:flex-row mb-6 rounded-md w-full group relative overflow-hidden md:h-[259px]"
  >
    <Image
      src={cruise.image}
      alt={cruise.packageTitle}
      className="w-full block max-h-[200px] lg:max-w-[350px] lg:max-h-[259px] md:hidden lg:block object-cover"
      priority={true}
      width="0"
      height="0"
      sizes="100vw"
    />
    <div
      onClick={() => onClick(cruise)}
      className="flex flex-col md:flex-row justify-between w-full p-5 sm:pl-4 md:pl-4 lg:pl-8 md:py-0 md:pr-0 lg:max-h-[259px] bg-white cursor-pointer relative"
    >
      <div className="mr-3">
        <h3 className="font-bold mt-5 text-md text-[#051656]">
          {cruise.amountOfNights} NIGHTS
        </h3>
        <h1 className="sm:text-md md:text-2xl lg:text-3xl mb-5 text-[#051656]">
          {cruise.packageTitle}
        </h1>
        <h1 className="mb-4 flex items-center text-[#051656] font-semibold">
          <FaShip className="text-[#051656] mr-2" /> {cruise.shipName}
        </h1>
        <div className="mb-4 text-sm flex items-center">
          <span className="font-bold text-gray-700">
            {cruise.direction}:&nbsp;
          </span>{' '}
          <p className="mr-1 text-xs text-gray-700 font-light">
            {cruise.directionCities}
          </p>
        </div>
        <div className="text-sm mb-5 flex flex-wrap items-center">
          <span className="font-bold text-gray-700">VISITING:&nbsp;</span>
          {cruise.countriesVisiting.map((city: string, i: number) => (
            <p className="mr-1 text-xs text-gray-700 font-light" key={i}>
              {city},{' '}
            </p>
          ))}
        </div>
      </div>
      <div className="pr-5 lg:pr-0 w-full md:max-w-[284px] flex flex-col justify-center items-start md:items-end lg:items-center relative z-2 lg:border-r-[#febd13] lg:border-r-[16px]">
        <div className="hidden lg:block absolute z-0 right-0 top-0 h-full bg-[#febd13] w-0 transition-all duration-300 group-hover:w-full"></div>
        <h1 className="z-10 text-7xl font-kapra-condensed text-[#051656]">
          ${cruise.price}
        </h1>
        <div className="z-10 text-xs font-semibold mb-6 text-[#051656]">
          {cruise.perPerson}
        </div>
        <button className="w-full z-10 bg-[#febd13] lg:bg-transparent border border-solid border-[#febd13] lg:border-[#051656] text-[#051656] px-10 md:px-10 lg:px-7 py-2.5 text-sm font-semibold lg:w-fit">
          View {cruise.cruiseOptions} date
          {cruise.cruiseOptions === 1 ? '' : 's'}
        </button>
      </div>
    </div>
  </div>
);

export default CruiseCard;
