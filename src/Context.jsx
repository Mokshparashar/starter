import { createContext, useContext, useReducer } from "react";
import data from "./data";
import { useState } from "react";
import { CLEAR_USERS, REFETCH_USERS } from "./actions";
import reducer from "./reducer";
export const array = data.map((obj) => {
  return [obj.id, obj];
});
export const mappedData = new Map(array);
console.log(mappedData);

export const arrayedData = Array.from(mappedData.entries());

const AppContext = createContext();

const initialState = {
  user: arrayedData,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  const refetchUsers = () => {
    dispatch({ type: REFETCH_USERS, payload: arrayedData });
  };
  return (
    <AppContext.Provider value={{ ...state, clearUsers, refetchUsers }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
