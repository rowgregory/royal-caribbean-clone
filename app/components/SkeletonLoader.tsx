import React from 'react';

export const SkeletonLoader = () => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 animate-pulse">
      <div className="h-8 w-2/3 bg-gray-300 mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300"></div>
      <div className="h-4 w-1/4 bg-gray-300 mt-4"></div>
    </div>
  );
};

export default SkeletonLoader;
