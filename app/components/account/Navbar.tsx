import React from 'react';

const Navbar = () => {
  return (
    <section className="border-b border-b-grey-500 w-full h-[55px] flex items-center px-5">
      <div className="max-w-[984px] flex w-full mx-auto">
        <div className="mr-10 text-slate-400">Upcoming cruises</div>
        <div className="mr-10 text-slate-400">Past cruises</div>
        <div className="text-slate-400">Courtsey holds</div>
      </div>
    </section>
  );
};

export default Navbar;
