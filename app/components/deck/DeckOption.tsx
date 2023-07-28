'use client';

import dynamic from 'next/dynamic';
import ContinueButton from '../ContinueBtn';

const FaChevronRight = dynamic(() =>
  import('react-icons/fa').then((module) => module.FaChevronRight)
);

const DeckOption = ({ deckNumber, obj, setDeckNumber }: any) => {
  return (
    <div
      className={`h-16 px-8 flex justify-between items-center w-full ${
        deckNumber === obj.deck ? 'bg-blue-100' : ''
      }`}
    >
      <div>{obj.deck}</div>
      {deckNumber === obj.deck ? (
        <div className="w-[100px]">
          <ContinueButton
            payload={{ shipDeck: obj.deck }}
            step={2.6}
            href="/booking/cabin"
            btnText="Select"
          />
        </div>
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
  );
};

export default DeckOption;
