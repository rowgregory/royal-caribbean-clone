'use client';

import React, { useMemo } from 'react';
import { useCruiseContext } from '@/app/context/cruiseContext';
import cruises from '../../data/cruises.json'
import RoomCategory from './RoomCategory';

const CategorySelector = () => {
  const { cruise } = useCruiseContext() as any;

  const rooms = useMemo(() => {
    return cruises
      ?.flatMap(
        (c: any) =>
          c.availableDates?.find((obj: any) => obj.id === cruise?.dateId)?.rooms
      )
      .filter((r) => r !== undefined);
  }, [cruise]);

  return rooms?.map((room: any, i: number) => (
    <RoomCategory key={i} room={room} />
  ));
};
export default CategorySelector;
