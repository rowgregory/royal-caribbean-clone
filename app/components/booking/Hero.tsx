'use client';

import Image from 'next/image';

const Hero = ({ cruise }: any) => {
  return (
    <div className="hidden md:block relative w-full shadow-lg mt-8">
      <Image
        src="/booking_landing_hero.jpeg"
        alt="Book your cruise today!"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-md"
        priority={true}
      />
      <div className="absolute top-0 bg-black opacity-40 w-full h-full z-[5]"></div>
      <div className="w-fit z-[10] absolute inset-0 left-0 p-4 flex justify-center flex-col">
        <p className="w-fit text-white font-kapra-condensed text-6xl">
          YOU&apos;RE FEELING ADVENTUROUS
        </p>
        <p className="w-fit text-lg text-white tracking-widest text-thin">
          We like that! Let&apos;s get you onboard <br />
          {cruise?.shipName}
        </p>
      </div>
    </div>
  );
};

export default Hero;
