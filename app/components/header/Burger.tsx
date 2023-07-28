'use client';

import {
  CruiseContextProps,
  useCruiseContext,
} from '@/app/context/cruiseContext';

const Burger = () => {
  const { openBurgerMenu, setOpenBurgerMenu } =
    useCruiseContext() as CruiseContextProps;
  return (
    <div
      onClick={() => setOpenBurgerMenu(!openBurgerMenu)}
      className="burger relative w-7 h-5 cursor-pointer transition-transform duration-300 transform"
    >
      <span className="block absolute h-[3px] w-[28px] bg-white transition-transform duration-300 rounded-md"></span>
      <span className="block absolute top-2/4 left-0 transform -translate-y-1/2 h-[3px] w-[28px] bg-white transition-transform duration-300 rounded-md"></span>
      <span className="block absolute bottom-0 h-[3px] w-[28px] bg-white transition-transform duration-300 rounded-md"></span>
    </div>
  );
};

export default Burger;
