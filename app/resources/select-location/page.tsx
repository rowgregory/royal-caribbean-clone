'use client';

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import i18n from '@/i18next';
import { LanguageContext } from '@/app/context/LanguageProvider';
import Link from 'next/link';

const countryData = [
  {
    flag: '/us.jpeg',
    lng: 'en',
    textKey: 'United States',
    number: '866-562-7625',
  },
  {
    flag: '/argentina.png',
    lng: 'ar',
    textKey: 'Argentina',
    number: '1-305-341-0204',
  },
  {
    flag: '/brazil.png',
    lng: 'br',
    textKey: 'Brazil',
    number: '11 4760-9311',
  },
  {
    flag: '/canada.png',
    lng: 'ca',
    textKey: 'Canada',
    number: '866-562-7625',
  },
];

const SelectLocationPage = () => {
  const { t } = useTranslation('common');
  const { selectLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = (country: any) => {
    i18n.changeLanguage(country.lng);
    selectLanguage(country);
  };

  return (
    <div className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-[#15264c] text-4xl font-arial-narrow font-bold tracking-[-2px]">
          {t('resources.select-location.selectYourLocation')}
        </div>
        <div className="mt-24 border-b border-[#15264c] text-[#15264c] tracking-[2px]">
          {t('resources.select-location.americas')}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 gap-5 md:grid-cols-4  mt-4">
          {countryData.map((country: any, i: number) => (
            <Link
              href="/"
              onClick={() => handleChangeLanguage(country)}
              className="mb-4 md:mb-0 flex items-center cursor-pointer"
              key={i}
            >
              <Image
                src={country.flag}
                className="mr-3 w-9 h-auto"
                alt={`${i}`}
                width="0"
                height="0"
                sizes="100vw"
              />
              <div className="text-[#2e3b5d] font-[300] font-[16px]">
                {country.textKey}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectLocationPage;
