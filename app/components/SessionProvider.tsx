'use client';

import React from 'react';
import { SessionProvider as AuthSessionProvider } from 'next-auth/react';

const SessionProvider = ({ children }: any) => {
  return <AuthSessionProvider>{children}</AuthSessionProvider>;
};

export default SessionProvider;
