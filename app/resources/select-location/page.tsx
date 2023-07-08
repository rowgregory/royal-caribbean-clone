'use client';

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import US from '../../assets/flags/us.jpeg';
import Argentina from '../../assets/flags/argentina.png';
import Brazil from '../../assets/flags/brazil.png';
import Canada from '../../assets/flags/canada.png';
import Image from 'next/image';
import i18n from '@/i18next';
import { LanguageContext } from '@/app/context/LanguageProvider';
import { useRouter } from 'next/navigation';

const countryData = [
  {
    flag: US,
    lng: 'en',
    textKey: 'United States',
    number: '866-562-7625',
  },
  {
    flag: Argentina,
    lng: 'ar',
    textKey: 'Argentina',
    number: '1-305-341-0204',
  },
  {
    flag: Brazil,
    lng: 'br',
    textKey: 'Brazil',
    number: '11 4760-9311',
  },
  {
    flag: Canada,
    lng: 'ca',
    textKey: 'Canada',
    number: '866-562-7625',
  },
];

const SelectLocationPage = () => {
  const { t } = useTranslation('common');
  const { selectLanguage } = useContext(LanguageContext);
  const router = useRouter();

  const handleChangeLanguage = (country: any) => {
    i18n.changeLanguage(country.lng);
    selectLanguage(country);
    router.push('/');
  };

  return (
    <div className='py-20 px-30 pb-0'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='text-[#15264c] text-[38px] font-arial-narrow font-[600] tracking-[-2px]'>
          {t('resources.select-location.selectYourLocation')}
        </div>
        <div className='mt-[90px] border-b border-[#15264c] text-[#15264c] tracking-[2px]'>
          {t('resources.select-location.americas')}
        </div>
        <div className='flex mt-4'>
          {countryData.map((country: any, i: number) => (
            <div
              onClick={() => handleChangeLanguage(country)}
              className='flex items-center w-[330px] cursor-pointer'
              key={i}
            >
              <Image
                src={country.flag}
                style={{ width: '30px', height: '20px' }}
                className='mr-3'
                alt={`${i}`}
              />
              <div className='text-[#2e3b5d] font-[300] font-[16px]'>
                {country.textKey}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectLocationPage;