import Link from 'next/link';
import React from 'react';
import { Oswald } from 'next/font/google';
import { useTranslation } from 'react-i18next';

const oswald = Oswald({ subsets: ['latin'] });

const Hero = () => {
  const { t } = useTranslation('common');
  return (
    <main className='flex flex-col items-center justify-between '>
      <div className='relative'>
        <div className="flex justify-center w-[calc(100vw)] md-lg:w-[calc(100vw-15px)]  h-[456px] bg-cover bg-center bg-no-repeat bg-[url('./assets/landing_jumbotron.jpeg')]">
          <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className='absolute h-full flex flex-col justify-center w-full px-[36px] max-w-[90rem]'>
            <h1
              className={`text-white text-[76px] tracking-[-2px] ${oswald.className} leading-[90px]`}
            >
              {t('hero.largeTextLine1')}
            </h1>
            <p className='text-white font-[600] text-[22px]'>
              + {t('hero.smallTextLine1')}
            </p>
            <p className='text-white font-[600] text-[22px]'>
              + {t('hero.smallTextLine2')}
            </p>
            <div className='bg-[#12c247] text-white px-[45px] h-[45px] flex items-center tracking-[2px] font-[300] text-[14px] max-w-[470px] w-full mt-4 rounded-sm'>
              {t('hero.saleEndsIn')}
            </div>
            <Link
              href='/cruises'
              className='bg-[#fdbb11] flex justify-center items-center text-[14px] tracking-[1px] font-[300px]  w-[155px] h-[40px] mt-10 rounded-sm'
            >
              {t('hero.bookNow')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
