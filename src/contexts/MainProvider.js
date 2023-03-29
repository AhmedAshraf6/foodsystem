'use client';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import MainReducer from '@/reducers/MainReducer';
import {
  ADD_PRODUCT,
  CALCULATE_TOTALS,
  DETECT_NAVBAR,
  REMOVE_PRODUCT,
  UPDATE_CARD,
} from '@/actions/actions';
import { allProducts } from '@/utils/Constants';
const MainContext = createContext();
const intialState = {
  productsData: allProducts,
  navbar: false,
  card: [],
  itemsInCard: [],
  total: 0,
  amount: 0,
};
export default function MainProvider({ children }) {
  const [state, dispatch] = useReducer(MainReducer, intialState);
  const detectNavbar = (val) => {
    dispatch({ type: DETECT_NAVBAR, payload: val });
  };
  const addProduct = (id) => {
    dispatch({ type: ADD_PRODUCT, payload: id });
  };
  const removeProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };
  const updateCard = (id, amount) => {
    dispatch({ type: UPDATE_CARD, payload: id, payload2: amount });
  };
  useEffect(() => {
    dispatch({ type: CALCULATE_TOTALS });
  }, [state.card]);
  return (
    <MainContext.Provider
      value={{ ...state, detectNavbar, addProduct, removeProduct, updateCard }}
    >
      {children}
    </MainContext.Provider>
  );
}
export const useMainContext = () => {
  return useContext(MainContext);
};
