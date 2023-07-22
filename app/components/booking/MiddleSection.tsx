import React from 'react';
import TableSection from './TableSection';
import IconSection from './IconSection';
import { CruiseContextProps, useCruiseContext } from '@/app/context/cruiseContext';

const MiddleSection = React.memo(({ showDetails }: any) => {
  const { cruise, step } = useCruiseContext() as CruiseContextProps;
  return showDetails ? (
    <TableSection cruise={cruise} />
  ) : (
    <IconSection cruise={cruise} step={step}  />
  );
});

MiddleSection.displayName = 'MiddleSection';
export default MiddleSection;
