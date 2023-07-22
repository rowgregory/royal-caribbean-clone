'use client';

import i18n from '@/i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

const TranslationProvider = ({ children }: any) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
