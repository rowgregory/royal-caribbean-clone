'use client';

import Image from 'next/image';

type SectionTranslate = {
  Aft: string;
  'Mid-Ship': string;
  Forward: string;
};

type SectionType = 'Aft' | 'Mid-Ship' | 'Forward';

const ShipImage = ({
  deckNumber,
  section,
}: {
  deckNumber: number;
  section: SectionType;
}) => {
  if (section !== undefined) {
    localStorage.setItem('section', JSON.stringify(section));
  }
  const shipSectionFromLocalStorage = localStorage.getItem('section')
    ? JSON.parse(localStorage.getItem('section') || '')
    : '';

  const sectionTranslate: SectionTranslate = {
    Aft: '389px',
    'Mid-Ship': '-760px',
    Forward: '-400px',
  };

  // Type assertion to ensure section is of the correct type
  const translatedSection: SectionType =
    section !== undefined
      ? (section as SectionType)
      : shipSectionFromLocalStorage;

  const translateX = sectionTranslate[translatedSection];

  return (
    <figure className="h-[314px] w-[400px] overflow-hidden mx-auto">
      <Image
        src="/ship_section.png"
        alt="Ship decks"
        className={`transform scale-[3] w-full translate-x-[${translateX}] translate-y-[100px] w-full h-auto`}
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
  );
};

export default ShipImage;
