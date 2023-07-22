import Image from 'next/image';

const CruiseCard = ({ cruise, onClick }: any) => (
  <div
    key={cruise.packageTitle}
    className="h-[300px] h-full flex mb-6 rounded-md w-full"
  >
    <Image
      src={cruise.image}
      alt={cruise.packageTitle}
      className="max-w-[350px] h-[300px] w-full object-cover"
      priority={true}
      width={350}
      height={300}
    />
    <div onClick={() => onClick(cruise)} className="flex justify-between w-full pl-8 bg-white cursor-pointer">
      <div>
        {cruise.pill && (
          <div className="mt-8 bg-sky-200 text-gray-800 text-sm rounded-2xl flex justify-center items-center px-4 py-1 w-fit">
            {cruise.pill}
          </div>
        )}
        <h3 className="font-bold text-md mt-6">{cruise.amountOfNights} NIGHTS</h3>
        <h1 className="text-3xl mb-6">{cruise.packageTitle}</h1>
        <h1 className="mb-4">{cruise.shipName}</h1>
        <p className="mb-4 text-sm">
          {cruise.direction}: {cruise.directionCities}
        </p>
        <div className="text-sm mb-4 flex flex-wrap items-center">
          VISITING:
          {cruise.countriesVisiting.map((city: string, i: number) => (
            <p className="mr-1 text-sm" key={i}>
              {city},{' '}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[284px] flex flex-col justify-center items-center">
        <h1 className="text-6xl font-kapra-condensed">${cruise.price}</h1>
        <div>{cruise.perPerson}</div>
        <button>
          View {cruise.cruiseOptions} date
          {cruise.cruiseOptions === 1 ? '' : 's'}
        </button>
      </div>
    </div>
  </div>
);

export default CruiseCard;