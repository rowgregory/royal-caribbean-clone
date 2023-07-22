import { useMemo } from 'react';
import DeckOption from './DeckOption';
import deckData from '@/app/utils/deckData';

const DeckSelector = ({ deckNumber, setDeckNumber }: any) => {
  const memoizedDeckData = useMemo(() => deckData, []);
  return (
    <section className="relative">
      <div className="px-8 py-4 shadow-[0_0_0.5rem_0.0625rem_rgba(6,21,86,0.15)] rounded-tl-lg">
        Deck
      </div>
      {memoizedDeckData.map((obj: any, i: number) => (
        <DeckOption
          key={i}
          deckNumber={deckNumber}
          obj={obj}
          setDeckNumber={setDeckNumber}
        />
      ))}
    </section>
  );
};

export default DeckSelector;
