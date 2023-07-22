import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <section className="border-b border-b-grey-500 w-full h-[55px] flex items-center">
      <div className="max-w-[984px] w-full mx-auto">
        <Link className="mr-10 text-slate-400" href="/account">
          Upcoming cruises
        </Link>
        <Link className="mr-10 text-slate-400" href="/account/past-cruises">
          Past cruises
        </Link>
        <Link className="text-slate-400" href="/account/courtsey-holds">
          Courtsey holds
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
