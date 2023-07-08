import Image from 'next/image';
import React from 'react';
import GameChanger1 from '../../assets/home/game_changer_1.jpeg';
import GameChanger2 from '../../assets/home/game_changer_2.jpeg';

const VideoSection = () => {
  return (
    <div className='w-full overflow-x-hidden mb-10 relative'>
      <div className='absolute h-0 w-0 top-0 left-0 z-10 border-b-[100px] border-b-transparent border-b-solid border-l-[100vw] border-l-[#fff] border-l-solid'></div>
      <video className='w-full' autoPlay muted loop>
        <source src='/home_video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute h-0 w-0 bottom-0 right-0 z-10 border-t-[100px] border-t-transparent border-t-solid border-r-[100vw] border-r-[#fff] border-r-solid'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h2 className='text-3xl  text-white'>FUTURE GAMECHANGERS</h2>
        <p className='text-white text-[64px] font-kapra-condensed'>
          ARRIVING 2024
        </p>
        <div className='flex gap-4'>
          <div className='relative w-screen max-w-[760px] h-screen max-h-[430px] rounded-md overflow-hidden'>
            <div className='absolute inset-0'>
              <Image
                src={GameChanger1}
                alt='Game Changer 1'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute left-0 right-0 p-4 h-full flex items-center flex-col justify-center'>
              <p className='text-white text-base'>
                THE WORLD&apos;S BEST FAMILY VACATION
              </p>
              <p className='text-white font-kapra-condensed text-5xl'>
                ICON OF THE SEAS
              </p>
              <button className='bg-yellow-500 text-black text-base px-4 py-2 mt-3 rounded-sm'>
                BOOK NOW
              </button>
            </div>
          </div>
          <div className='relative md:w-[760px] h-auto max-h-[430px] rounded-md overflow-hidden'>
            <div className='absolute inset-0'>
              <Image
                src={GameChanger2}
                alt='Game Changer 1'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute left-0 right-0 p-4 h-full flex items-center flex-col justify-center'>
              <p className='text-white text-base'>
                THE WORLD&apos;S BIGGEST VACATION
              </p>
              <p className='text-white font-kapra-condensed text-5xl'>
                UTOPIA OF THE SEAS
              </p>
              <button className='bg-yellow-500 text-black text-base px-4 py-2 mt-3 rounded-sm'>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
