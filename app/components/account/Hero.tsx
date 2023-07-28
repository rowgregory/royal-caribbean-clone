import Image from 'next/image';
import React from 'react';

const Hero = ({ user }: any) => {
  return (
    <section className="relative">
      <Image
        src="/account_hero.jpeg"
        className="max-h-44 w-full object-cover"
        alt="Royal Caribbean Account Page"
        width="0"
        height="0"
        sizes="100vw"
        priority={true}
      />
      <div className="absolute inset-0 max-w-[1024px] w-full h-full flex items-center justify-between mx-auto">
        <div className="text-white font-medium text-5xl w-full pl-5">
          {user?.name?.split(' ')[0]}
        </div>
      </div>
    </section>
  );
};

export default Hero;
