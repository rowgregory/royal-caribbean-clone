import Link from 'next/link';
import React from 'react';

const ReservationSection = ({ data }: any) => {
  return (
    <div className="relative mt-[-135px] z-100 bg-white rounded-md p-5 h-fit w-full max-w-[1200px] mx-auto shadow-lg">
      <div className="flex flex-col justify-start items-start mb-10 md:flex-row md:justify-between">
        <div className="flex flex-col">
          <div className=" text-sm mb-2 text-gray-600 uppercase">
            Reservation
          </div>
          <div className="text-2xl font-kapra">{data?.id}</div>
        </div>
        <div className="flex flex-col items-start mt-10 md:items-end md:mt-0">
          <div>
            {data?.paymentChoice === 'totalAmount'
              ? `You've paid the total amount!`
              : `You've paid the minimum blanace of $${data?.paymentAmountToday?.toFixed(
                  2
                )}`}
          </div>
          <div className="mt-2">
            {data?.paymentAmountToday === 200 ? (
              <span className="font-bold text-2xl">
                Remaining Balance: $
                {(data?.total - data?.paymentAmountToday).toFixed(2)}
              </span>
            ) : (
              <div className="font-bold text-3xl">$1023.56</div>
            )}
          </div>
        </div>
      </div>
      <div className="font-semibold mb-2 text-lg text-gray-800">Guests</div>
      <div className="flex flex-col mb-10">
        {data?.guestForms?.map((form: any, i: number) => (
          <div key={i} className="text-sm font-normal text-gray-600 mb-1">
            {form.firstName}&nbsp;{form.lastName}
          </div>
        ))}
      </div>
      <div className="mb-10 bg-gray-100 p-6 rounded-md flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">Suite</div>
          <div className="text-xl text-gray-600">#{data?.shipRoomNumber}</div>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <div className="text-2xl font-bold mt-4 md:mt-0">Your Documents</div>
          <div className="text-md text-gray-600">
            You have no cruise documents available at this time
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center ">
        <div className="text-gray-600 text-xl font-semibold">
          Enjoy savings on dining, tours, and more
        </div>
        <Link
          href="/cruises"
          className="text-sm text-white bg-sky-400 px-10 py-2 rounded-sm mt-4 md:mt-0"
        >
          Plan my cruise
        </Link>
      </div>
    </div>
  );
};

export default ReservationSection;
