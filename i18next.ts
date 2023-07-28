// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './public/locales/en/common.json';
import common_ar from './public/locales/ar/common.json';
import common_br from './public/locales/br/common.json';
import common_ca from './public/locales/ca/common.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    ar: {
      common: common_ar,
    },
    br: {
      common: common_br,
    },
    ca: {
      common: common_ca,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
