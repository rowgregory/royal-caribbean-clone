'use client';

import React, { useMemo } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import roomPreferenceData from '@/app/utils/roomPreferenceData';
import RoomPreferenceCard from './RoomPreferenceCard';

const RoomPreferenceSelector = () => {
  const { cruise } = useCruiseContext() as any;

  const roomPreferences = useMemo(() => {
    return roomPreferenceData.map((pref: any, i: number) => {
      const price = i === 1 ? cruise?.roomPrice + 66 : cruise?.roomPrice;
      return { ...pref, price };
    });
  }, [cruise?.roomPrice]);

  return (
    <div className="w-full flex gap-5">
      {roomPreferences.map((pref: any, i: number) => (
        <RoomPreferenceCard key={i} pref={pref} cruise={cruise} />
      ))}
    </div>
  );
};

export default RoomPreferenceSelector;
