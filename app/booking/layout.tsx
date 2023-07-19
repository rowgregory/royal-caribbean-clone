'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import WhiteLogo from '../assets/logo-white.png';
import { useCruiseContext } from '../context/cruiseContext';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaCreditCard, FaUser } from 'react-icons/fa';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { BiBed } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const Header = () => {
  return (
    <header className="h-[60px] bg-blue-900 flex items-center pl-6">
      <Image
        src={WhiteLogo}
        alt="Royal Caribbean"
        className="h-[35px] w-[35px] object-cover"
      />
    </header>
  );
};

const Sidebar = ({ showDetails, setShowDetails, cruise, step }: any) => {
  const handleDetailsToggle = useCallback(() => {
    setShowDetails((prev: any) => !prev);
  }, [setShowDetails]);

  const memoizedCruiseDetails = useMemo(() => {
    return cruise?.countriesVisiting?.map((country: string, i: number) => ({
      id: i,
      country,
    }));
  }, [cruise?.countriesVisiting]);


  return (
    <aside className="w-full max-w-[380px] mt-6 py-4 bg-white rounded-md min-h-[calc(100vh-84px)]">
      <div className="px-8">
        <div className="text-2xl text-blue-950 mb-5">
          {cruise?.amountOfNights} Night {cruise?.packageTitle}
        </div>
        <div className="text-gray-800 font-light mb-5">
          Leaving from {cruise?.directionCities}
          <br /> onboard {cruise?.shipName}
        </div>
        <div className="text-gray-800 flex items-center text-left font-normal text-sm">
          {cruise?.departDate} <AiOutlineArrowRight className="mx-2" />{' '}
          {cruise?.arrivalDate}
        </div>
        <div
          className="text-sm text-blue-800 font-light mt-5 cursor-pointer"
          onClick={handleDetailsToggle}
        >
          {step === 1
            ? ''
            : step >= 2
            ? 'View itinerary details'
            : 'View room details'}
        </div>
        <hr className="border-t border-gray-300 w-full my-5" />
      </div>
      {showDetails ? (
        <table className="w-full ml-8">
          <thead>
            <tr>
              <th className="text-left font-normal text-sm">Day</th>
              <th className="text-left font-normal text-sm">Port</th>
            </tr>
          </thead>
          <tbody>
            {memoizedCruiseDetails?.map((obj: any, i: number) => (
              <tr key={i} className="h-14 py-3">
                <td className="font-light text-gray-500 text-sm">{i + 1}</td>
                <td className="font-light text-blue-900">{obj.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full mb-13">
          <section>
            <div
              className={`${
                step >= 2 && step < 3
                  ? 'border-l-4 inset-0 border-cyan-600'
                  : ''
              } flex items-center h-12 pl-8`}
            >
              <div className={`w-8 ${step >= 2 ? '-mx-[4px]' : ''}`}>
                <BiBed />
              </div>
              <div className={`font-light ${step >= 2 ? '-mx-[4px]' : ''}`}>
                Staterooms
              </div>
            </div>
            {step >= 2.1 && (
              <div className="pb-4">
                <div className="flex flex-col"></div>
                <div className=" flex w-full justify-between px-8">
                  {step >= 2.1 && (
                    <div className="text-blue-950 font-semibold">Room</div>
                  )}
                  {step >= 2.4 && (
                    <div className="text-blue-950 font-semibold">
                      ${cruise?.subtotal}
                    </div>
                  )}
                </div>
                {step >= 2.2 && (
                  <div className="pl-8 text-sm text-gray-500 mt-1">
                    {cruise?.guests?.adults + cruise?.guests?.children} Guests{' '}
                    {step >= 2.4 &&
                    cruise?.roomPreferenceType === 'We pick your room'
                      ? `| ${cruise?.roomType} Guarantee`
                      : step >= 2.4 &&
                        cruise?.roomPreferenceType === 'You pick your room' &&
                        `| ${cruise?.roomType}`}
                  </div>
                )}
                {step >= 2.5 && cruise?.shipSection && (
                  <div className="flex pl-8 text-sm text-gray-500 mt-1">
                    {cruise?.shipSection}
                    {step >= 2.6 && (
                      <>&nbsp;&nbsp;|&nbsp;&nbsp;Deck {cruise?.shipDeck}</>
                    )}

                    {step >= 3 && (
                      <>&nbsp;&nbsp;|&nbsp;&nbsp;#{cruise?.shipRoomNumber}</>
                    )}
                  </div>
                )}
              </div>
            )}
          </section>
          <div
            className={`${
              3 === step ? 'border-l-4 inset-0 border-cyan-600' : ''
            } flex items-center h-12 pl-8`}
          >
            <div className={`w-8 ${3 === step ? '-mx-[4px]' : ''}`}>
              <FaUser />
            </div>
            <div className={`font-light `}>Guest Info</div>
          </div>
          <div
            className={`${
              4 === step ? 'border-l-4 inset-0 border-cyan-600' : ''
            } flex items-center h-12 pl-8`}
          >
            <div className={`w-8 ${4 === step ? '-mx-[4px]' : ''}`}>
              <MdOutlineDinnerDining />
            </div>
            <div className={`font-light ${4 === step ? '-mx-[4px]' : ''}`}>
              Dining & Options
            </div>
          </div>
          <div
            className={`${
              5 === step ? 'border-l-4 inset-0 border-cyan-600' : ''
            } flex items-center h-12 pl-8`}
          >
            <div className={`w-8 ${5 === step ? '-mx-[4px]' : ''}`}>
              <FaCreditCard />
            </div>
            <div className={`font-light ${5 === step ? '-mx-[4px]' : ''}`}>
              Payment
            </div>
          </div>
        </div>
      )}
      {step >= 3 && (
        <section className="p-8">
          <div className="text-blue-950 mb-5">Summary</div>
          <div className="flex justify-between items-center w-full mb-3 text-gray-700 text-sm">
            <div>Subtotal</div>
            <div>${cruise?.subtotal?.toFixed(2)}</div>
          </div>
          <div className="flex justify-between items-center w-full mb-3 text-gray-700 text-sm">
            <div>Taxes & fees</div>
            <div>${cruise?.taxes?.toFixed(2)}</div>
          </div>
        </section>
      )}
    </aside>
  );
};

const MainContent = ({ children }: any) => {
  return <main className="w-[calc(1440px-380px)] w-full">{children}</main>;
};

const BookingLayout = ({ children }: any) => {
  const router = useRouter();
  const { cruise, step, successPay } = useCruiseContext() as any;
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    console.log('CRUISE: ', cruise);
    if (step >= 2) {
      setShowDetails(false);
    }
    if (successPay) router.push('/booking/complete');
  }, [step, successPay, router, cruise]);
  

  return (
    <div className="bg-[#f7f8f9] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        <Header />
        <div className="flex w-full max-w-[1440px]">
          <Sidebar
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            cruise={cruise}
            step={step}
          />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </div>
  );
};

export default BookingLayout;
