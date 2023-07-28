'use client';

import { createContext, useReducer, useContext, useEffect } from 'react';

export interface CruiseContextProps {
  loading: boolean;
  cruise: any;
  step: number;
  openMobileItinerary: boolean;
  openBurgerMenu: boolean;
  addCruise: (cruise: any) => void;
  setBookingStep: (step: number) => void;
  updateCruise: (fields: any) => void;
  removeFieldsFromCruise: (fields: any) => void;
  setOpenMobileItinerary: (openMobileItinerary: any) => void;
  setOpenBurgerMenu: (openBurgerMenu: any) => void;
}

const initialState = {};

export const CruiseContext = createContext({
  loading: true,
  cruise: {},
  step: 0,
  openMobileItinerary: false,
  openBurgerMenu: false,
  addCruise: (cruise: any) => cruise,
  setBookingStep: (step: any) => step,
  updateCruise: (fields: any) => fields,
  removeFieldsFromCruise: (fields: any) => fields,
  setOpenMobileItinerary: (openMobileItinerary: any) => openMobileItinerary,
  setOpenBurgerMenu: (openBurgerMenu: any) => openBurgerMenu,
});

const cruiseReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_CRUISE':
      localStorage.setItem('cruise', JSON.stringify({ ...action.payload }));
      return {
        ...state,
        loading: false,
        cruise: {
          ...action.payload,
        },
      };
    case 'SET_BOOKING_STEP':
      localStorage.setItem('step', action.payload);
      return {
        ...state,
        loading: false,
        step: action.payload,
      };
    case 'UPDATE_CRUISE':
      localStorage.setItem(
        'cruise',
        JSON.stringify({ ...state.cruise, ...action.payload })
      );
      return {
        ...state,
        loading: false,
        cruise: {
          ...state.cruise,
          ...action.payload,
        },
      };
    case 'REMOVE_FIELDS_FROM_CRUISE':
      localStorage.setItem('cruise', JSON.stringify({ ...action.payload }));
      return {
        ...state,
        loading: false,
        cruise: {
          ...action.payload,
        },
      };
    case 'SET_OPEN_MOBILE_ITINERARY':
      return {
        ...state,
        ...state.cruise,
        openMobileItinerary: action.payload,
      };
    case 'SET_OPEN_BURGER_MENU':
      return {
        ...state,
        ...state.cruise,
        openBurgerMenu: action.payload,
      };
    default:
      return { ...state };
  }
};

export const CruiseProvider = (props: any) => {
  const [state, dispatch] = useReducer(cruiseReducer, initialState);

  useEffect(() => {
    const cruiseFromStorage = localStorage.getItem('cruise');
    const stepFromStorage = localStorage.getItem('step');

    if (cruiseFromStorage) {
      dispatch({ type: 'ADD_CRUISE', payload: JSON.parse(cruiseFromStorage) });
    }

    if (stepFromStorage) {
      dispatch({
        type: 'SET_BOOKING_STEP',
        payload: JSON.parse(stepFromStorage),
      });
    }
  }, []);

  const addCruise = (cruise: any) => {
    dispatch({ type: 'ADD_CRUISE', payload: cruise });
  };

  const setBookingStep = (step: number) => {
    dispatch({ type: 'SET_BOOKING_STEP', payload: step });
  };

  const updateCruise = (fields: any) => {
    dispatch({ type: 'UPDATE_CRUISE', payload: fields });
  };

  const removeFieldsFromCruise = (fields: any) => {
    dispatch({ type: 'REMOVE_FIELDS_FROM_CRUISE', payload: fields });
  };

  const setOpenMobileItinerary = (openMobileItinerary: any) => {
    dispatch({
      type: 'SET_OPEN_MOBILE_ITINERARY',
      payload: openMobileItinerary,
    });
  };

  const setOpenBurgerMenu = (openBurgerMenu: any) => {
    dispatch({
      type: 'SET_OPEN_BURGER_MENU',
      payload: openBurgerMenu,
    });
  };

  return (
    <CruiseContext.Provider
      value={{
        loading: state.loading,
        cruise: state.cruise,
        step: state.step,
        openMobileItinerary: state.openMobileItinerary,
        openBurgerMenu: state.openBurgerMenu,
        addCruise,
        setBookingStep,
        updateCruise,
        removeFieldsFromCruise,
        setOpenMobileItinerary,
        setOpenBurgerMenu,
      }}
      {...props}
    />
  );
};

export const useCruiseContext = () => useContext(CruiseContext);
