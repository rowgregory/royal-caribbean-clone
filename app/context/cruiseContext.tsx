'use client';

import { createContext, useReducer, useContext, useEffect } from 'react';

const initialState = {};

export const CruiseContext = createContext({
  cruise: {},
  step: 0,
  successPay: false,
  addCruise: (cruise: any) => cruise,
  setBookingStep: (step: any) => step,
  updateCruise: (fields: any) => fields,
  removeFieldsFromCruise: (fields: any) => fields,
  payCruise: (cruise: any) => cruise
});

const cruiseReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_CRUISE':
      localStorage.setItem('cruise', JSON.stringify( { ...action.payload }))
      return {
        ...state,
        cruise: {
          ...action.payload,
        },
      };
    case 'SET_BOOKING_STEP':
      localStorage.setItem('step', action.payload )
      return {
        ...state,
        step: action.payload,
      };
    case 'UPDATE_CRUISE':
      localStorage.setItem('cruise', JSON.stringify({ ...state.cruise, ...action.payload }))
      return {
        ...state,
        cruise: {
          ...state.cruise,
          ...action.payload,
        },
      };
    case 'REMOVE_FIELDS_FROM_CRUISE':
      localStorage.setItem('cruise', JSON.stringify( { ...action.payload }))
      return {
        ...state,
        cruise: {
          ...action.payload,
        },
      };
    case 'PAY_CRUISE':
      console.log('ACTION PAYLOAD: ', action.payload)
      localStorage.setItem('cruise', JSON.stringify( { ...action.payload }))
      return {
        ...state,
        cruise: {
          ...action.payload,
        },
        successPay: true
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
      dispatch({ type: 'SET_BOOKING_STEP', payload: JSON.parse(stepFromStorage) });
    }
  }, []);

  const addCruise = (cruise: any) =>
    dispatch({ type: 'ADD_CRUISE', payload: cruise });

  const setBookingStep = (step: number) =>
    dispatch({ type: 'SET_BOOKING_STEP', payload: step });

  const updateCruise = (fields: any) =>
    dispatch({ type: 'UPDATE_CRUISE', payload: fields });

  const removeFieldsFromCruise = (fields: any) =>
    dispatch({ type: 'REMOVE_FIELDS_FROM_CRUISE', payload: fields });

  const payCruise = (fields: any) =>
    dispatch({ type: 'PAY_CRUISE', payload: fields });

  return (
    <CruiseContext.Provider
      value={{
        cruise: state.cruise,
        step: state.step,
        successPay: state.successPay,
        addCruise,
        setBookingStep,
        updateCruise,
        removeFieldsFromCruise,
        payCruise
      }}
      {...props}
    />
  );
};

export const useCruiseContext = () => useContext(CruiseContext);
