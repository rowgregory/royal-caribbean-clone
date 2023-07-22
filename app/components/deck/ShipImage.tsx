import Image from 'next/image';


const ShipImage = ({ deckNumber }: any) => {
  return (
    <figure className="h-[314px] w-[400px] overflow-hidden mx-auto">
    <Image
      src="/ship_section.png"
      alt="Ship decks"
      className="transform scale-[3] w-full translate-x-[-400px] translate-y-[100px] w-full h-auto "
      width="0"
      height="0"
      sizes="100vw"
      priority={true}
    />
    <figcaption className="mt-5">
      {[
        ...Array.from({ length: 13 }).map((_, i) => (
          <div
            className={`h-3.5 border-b-2 border-solid border-gray-300 ${
              i + 1 === deckNumber ? 'bg-blue-500' : ''
            }`}
            key={i}
          ></div>
        )),
      ].reverse()}
    </figcaption>
  </figure>
  )
}

export default ShipImage;