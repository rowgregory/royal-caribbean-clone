'use client';

import US from '../assets/flags/us.jpeg';

import { createContext, useReducer, useContext } from 'react';

const initialState = {
  country: {
    lng: 'en',
    flag: US,
    textKey: 'United States',
    number: '866-562-7625',
  },
};

export const LanguageContext = createContext<{
  country: { lng: string; flag: any; textKey: string };
  selectLanguage: (lang: string) => void;
}>({
  country: { lng: 'en', flag: US, textKey: 'United States' },
  selectLanguage: (lang: string) => lang,
});

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LANGUAGE_SELECTION':
      return {
        ...state,
        country: action.payload,
      };
    default:
      return { ...state };
  }
};

export const LanguageProvider = (props: any) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const selectLanguage = (country: string) =>
    dispatch({ type: 'LANGUAGE_SELECTION', payload: country });

  return (
    <LanguageContext.Provider
      value={{ country: state.country, selectLanguage }}
      {...props}
    />
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
