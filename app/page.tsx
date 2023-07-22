'use client';

import SecondaryHeader from './components/SecondaryHeader';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';
import Hero from './components/home/Hero';
import CruiseSeachWidget from './components/home/CruiseSeachWidget';
import BasicHomeCards from './components/home/BasicHomeCards';
import SelectCruisesCards from './components/home/SelectCruisesCards';
import VideoSection from './components/home/VideoSection';
import LastCallOnCruiseDeals from './components/home/LastCallOnCruiseDeals';
import GreatCruisesNearMe from './components/home/GreatCruisesNearMe';
import GetRoyalDeals from './components/home/GetRoyalDeals';
import PerfectDayAtCocoCay from './components/home/PerfectDayAtCocoCay';
import Image from 'next/image';
import AwardWinningShips from './components/home/AwardWinningShips';
import Footer from './components/Footer';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <SecondaryHeader />
      <Header />
      <Hero />
      <CruiseSeachWidget />
      <BasicHomeCards />
      <SelectCruisesCards />
      <VideoSection />
      <LastCallOnCruiseDeals />
      <GreatCruisesNearMe />
      <GetRoyalDeals />
      <PerfectDayAtCocoCay />
      <Image
        src="/cc.png"
        alt='Credit Card offer'
        className='w-full max-h-[320px] max-w-[1920px] mx-auto'
        width="0"
        height="0"
        sizes="100vw"
        priority={true}
      />
      <AwardWinningShips />
      <Footer />
    </>
  );
}
