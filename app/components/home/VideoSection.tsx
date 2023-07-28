import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VideoSection = () => {
  return (
    <div className="w-full overflow-x-hidden mb-10 relative h-screen">
      <div className="hidden md:block absolute h-0 w-0 top-0 left-0 z-10 border-b-[75px] border-b-transparent border-b-solid border-l-[100vw] border-l-[#fff] border-l-solid"></div>
      <video
        className="hidden md:block w-full h-full absolute object-cover top-0 left-0"
        autoPlay
        muted
        loop
      >
        <source src="/home_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hidden md:block absolute h-0 w-0 bottom-0 right-0 z-10 border-t-[100px] border-t-transparent border-t-solid border-r-[100vw] border-r-[#fff] border-r-solid"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[1600px] w-full">
        <h2 className="text-3xl  text-white">FUTURE GAMECHANGERS</h2>
        <p className="text-white text-[64px] font-kapra-condensed">
          ARRIVING 2024
        </p>
        <div className="flex flex-col items-center md:flex-row gap-4 px-4 md:px-12">
          <div className="relative w-full max-w-[500px] max-h-[300px] md:max-w-[760px] md:max-h-[450px] h-screen rounded-md overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/game_changer_1.jpeg"
                alt="Game Changer 1"
                className="w-full h-full object-cover"
                width="0"
                height="0"
                sizes="100vw"
                priority={true}
              />
            </div>
            <div className="absolute left-0 right-0 p-4 h-full flex items-center flex-col justify-center">
              <p className="text-white text-base">
                THE WORLD&apos;S BEST FAMILY VACATION
              </p>
              <p className="text-white font-kapra-condensed text-5xl">
                ICON OF THE SEAS
              </p>
              <Link
                href="/cruises"
                className="bg-yellow-500 text-black text-base px-4 py-2 mt-3 rounded-sm"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-[500px] max-h-[300px] md:max-w-[760px] md:max-h-[450px] h-screen rounded-md overflow-hidden">
            <div className="absolute inset-0 ">
              <Image
                src="/game_changer_2.jpeg"
                alt="Game Changer 1"
                className="w-full h-full object-cover"
                width="0"
                height="0"
                sizes="100vw"
                priority={true}
              />
            </div>
            <div className="absolute left-0 right-0 p-4 h-full flex items-center flex-col justify-center">
              <p className="text-white text-base">
                THE WORLD&apos;S BIGGEST VACATION
              </p>
              <p className="text-white font-kapra-condensed text-5xl">
                UTOPIA OF THE SEAS
              </p>
              <Link
                href="/cruises"
                className="bg-yellow-500 text-black text-base px-4 py-2 mt-3 rounded-sm"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
