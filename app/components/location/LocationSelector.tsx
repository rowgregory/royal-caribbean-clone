'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import locationData from '@/app/utils/locationData';
import LocationSection from './LocationSection';

const LocationSelector = () => {
  return (
    <div className="relative bg-white shadow-lg p-10">
      <Image
        src="/ship_section.png"
        alt="Ship sections"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-md my-24"
        priority={true}
      />
      <div className="absolute inset-0 h-full w-full flex">
        {locationData.map((obj: any, i: number) => (
          <LocationSection key={i} obj={obj} />
        ))}
      </div>
    </div>
  );
};

export default LocationSelector;
