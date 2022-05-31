import React, { createContext, useReducer } from "react";

export const AdjusmentContext = createContext();

const initialValue = [
  {
    id: 1,
    name: "Brightness",
    value: 10,
    min: 0,
    max: 100,
  },
  {
    id: 2,
    name: "Blur",
    value: 50,
    min: 0,
    max: 100,
  },
];
const adjustmentReducer = (state, action) => {
  const item = state.find((item) => item.id === action.id);
  item.value = action.value;
  return [...state];
};

const AdjusmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adjustmentReducer, initialValue);
  return (
    <AdjusmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AdjusmentContext.Provider>
  );
};

export default AdjusmentContextProvider;
