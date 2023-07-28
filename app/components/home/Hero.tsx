import Link from 'next/link';
import React from 'react';
import { Oswald } from 'next/font/google';
import { useTranslation } from 'react-i18next';

const oswald = Oswald({ subsets: ['latin'] });

const Hero = () => {
  const { t } = useTranslation('common');
  return (
    <main className="flex flex-col items-center justify-between   overflow-hidden">
      <div className="relative">
        <div className="flex justify-center w-screen bg-landing_jumbotron  h-[456px] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute h-full flex flex-col justify-center w-full max-w-[90rem] pl-12">
            <h1
              className={`text-white text-5xl sm:text-6xl lg:text-7xl tracking-[-2px] ${oswald.className}`}
            >
              {t('hero.largeTextLine1')}
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl font-semibold">
              + {t('hero.smallTextLine1')}
            </p>
            <p className="text-white text-base md:text-lg lg:text-xl font-semibold">
              + {t('hero.smallTextLine2')}
            </p>
            <Link
              href="/cruises"
              className="bg-[#fdbb11] flex justify-center items-center text-sm tracking-[1px] font-light px-10 w-fit h-[40px] mt-10 rounded-sm"
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
