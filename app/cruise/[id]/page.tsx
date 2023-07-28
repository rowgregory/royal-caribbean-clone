'use client';

import getCruiseById from '@/app/actions/getCruiseById';
import ReservationSection from '@/app/components/cruise-details/ReservationSection';
import calculateDaysLeft from '@/app/utils/calculateDaysLeft';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CruiseDetails = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState(null) as any;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCruiseById(params.id).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [params]);

  return (
    <>
      {loading && (
        <div className="min-h-screen">
          <div className="relative w-full h-[600px] p-10 flex flex-col bg-[url('/cruise_bg.jpeg')] bg-cover max-h-[600px] md:justify-between md:items-start md:flex-row"></div>
          <div className="px-6 mb-16">
            <div className="relative mt-[-135px] z-100 bg-white rounded-md p-5 h-fit w-full max-w-[1200px] mx-auto shadow-lg">
              <div className="flex flex-col justify-start items-start mb-10 md:flex-row md:justify-between">
                <div className="flex flex-col">
                  <div className=" text-sm mb-2 text-gray-600 uppercase">
                    Reservation
                  </div>
                  <div className="text-2xl font-kapra">-----</div>
                </div>
                <div className="flex flex-col items-start mt-10 md:items-end md:mt-0">
                  <div>Finding payment info</div>
                  <span className="font-bold text-2xl">
                    Do you have a balance?
                  </span>
                </div>
              </div>
              <div className="font-semibold mb-2 text-lg text-gray-800">
                Guests
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-screen">
        <div className="relative w-full h-[600px] p-10 flex flex-col bg-[url('/cruise_bg.jpeg')] bg-cover max-h-[600px] md:justify-between md:items-start md:flex-row">
          <div>
            <div className="text-white flex items-center">
              <Link href="/">
                <Image
                  src="/logo-white.png"
                  alt="Royal Caribbean"
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority={true}
                  className="w-10 h-auto mr-3"
                />
              </Link>
              {data?.shipName}&nbsp;&nbsp;|&nbsp;&nbsp;{data?.sailDate}
            </div>
            <div className="text-white text-4xl my-10 font-semibold max-w-[500px] w-full">
              {data?.amountOfNights}&nbsp;Night&nbsp;{data?.packageTitle}
            </div>
            <div className="text-white max-w-[500px] w-full">
              {data?.countriesVisiting}
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="flex flex-col w-32 absolute left-[-8px]">
              <div className="bg-[#0762bd] h-10 rounded-tl-md rounded-tr-md"></div>
              <div className="bg-[#3c87db] h-10 rounded-bl-md rounded-br-md"></div>
            </div>
            <div className="relative flex items-center">
              <div className="text-white text-4xl font-bold">
                {data?.sailDate && calculateDaysLeft(data?.sailDate)}
              </div>
              <div className="leading-4 text-white text-sm ml-2 ">
                Days
                <br />
                to go
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 mb-16">
          <ReservationSection data={data} />
        </div>
      </div>
    </>
  );
};

export default CruiseDetails;
