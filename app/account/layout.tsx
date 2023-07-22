'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/account/Header';
import Hero from '../components/account/Hero';
import Navbar from '../components/account/Navbar';

const AccountLayout = ({ children }: any) => {
  const session = useSession() as any;

  const user = session?.data?.user;

  return (
    <PrivateRoute>
      <Header user={user} />
      <Hero user={user} />
      <Navbar />
      {children}
    </PrivateRoute>
  );
};

export default AccountLayout;
