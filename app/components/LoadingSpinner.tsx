'use client';

import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 z-50">
      <div
        className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-blue-950 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <span className=" absolute text-white flex justify-center items-center">
        <Image
          src="/logo-dark.png"
          alt="Pre Gold Status"
          priority={true}
          width={35}
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-md"
        />
      </span>
    </div>
  );
};

export default LoadingSpinner;
