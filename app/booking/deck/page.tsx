'use client';

import useBookingStep from '@/app/utils/useBookingStep';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import ShipDecks from '../../assets/deck_9.png';
import { useCruiseContext } from '@/app/context/cruiseContext';
import { FaChevronRight } from 'react-icons/fa';

const deckData = [
  {
    deck: 13,
  },
  {
    deck: 9,
  },
  {
    deck: 6,
  },
  {
    deck: 2,
  },
];

const DeckPage = () => {
  const { updateCruise, setBookingStep, cruise } = useCruiseContext() as any;
  const [deckNumber, setDeckNumber] = useState(9);

  const { shipSection, ...rest } = cruise || {};
  useBookingStep(2.4, rest);

  const memoizedDeckData = useMemo(() => deckData, []);
  
  return (
    <div className="mx-16 pt-5 mb-10">
      <h1 className="text-3xl text-blue-950 tracking-wide font-semibold mt-10 mb-9">
        Good choice, now where do you want your room?
      </h1>
      <div className="relative bg-white shadow-lg pt-10 overflow-hidden">
        <figure className="h-[314px] w-[400px] overflow-hidden mx-auto">
          <Image
            src={ShipDecks}
            alt="Ship decks"
            className="transform scale-[3] w-full translate-x-[-400px] translate-y-[100px]"
          />
          <figcaption className="mt-5">
            {[
              ...Array.from({ length: 13 }).map((_, i) => (
                <div
                  className={`h-3.5 border-b-2 border-solid border-gray-300 ${
                    i + 1 === deckNumber ? 'bg-blue-500' : ''
                  }`}
                  key={i}
                ></div>
              )),
            ].reverse()}
          </figcaption>
        </figure>
        <section className="relative">
          <div className="px-8 py-4 shadow-[0_0_0.5rem_0.0625rem_rgba(6,21,86,0.15)] rounded-tl-lg">
            Deck
          </div>
          {memoizedDeckData.map((obj: any, i: number) => (
            <div
              key={i}
              className={`h-16 px-8 flex justify-between items-center w-full ${
                deckNumber === obj.deck ? 'bg-blue-100' : ''
              }`}
            >
              <div>{obj.deck}</div>
              {deckNumber === obj.deck ? (
                <Link
                  href="/booking/cabin"
                  className="bg-blue-600 text-sm w-fit px-12 py-2.5 text-white rounded-sm cursor-pointer"
                  onClick={() => {
                    updateCruise({ shipDeck: obj.deck });
                    setBookingStep(2.6);
                  }}
                >
                  Select
                </Link>
              ) : (
                <div
                  onClick={() => setDeckNumber(obj.deck)}
                  className="flex text-sm items-center text-blue-950 cursor-pointer"
                >
                  Included
                  <FaChevronRight className="text-blue-600 ml-2 text-sm" />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DeckPage;
