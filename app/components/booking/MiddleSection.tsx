import React from 'react';
import TableSection from './TableSection';
import IconSection from './IconSection';

const MiddleSection = React.memo(({ showDetails, cruise, step }: any) => {
  return showDetails ? (
    <TableSection cruise={cruise} />
  ) : (
    <IconSection cruise={cruise} step={step} />
  );
});

MiddleSection.displayName = 'MiddleSection';
export default MiddleSection;
