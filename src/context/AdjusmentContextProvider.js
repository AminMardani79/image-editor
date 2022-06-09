import React, { createContext, useReducer } from "react";

export const AdjusmentContext = createContext();

const initialValue = {
  flip: false,
  radius: {
    name: "Radius",
    value: 0,
    min: -100,
    max: 100,
  },
  adjusments: [
    {
      id: 1,
      name: "Brightness",
      value: 0,
      min: -100,
      max: 100,
    },
    {
      id: 2,
      name: "Blur",
      value: 0,
      min: 0,
      max: 100,
    },
    {
      id: 3,
      name: "Contrast",
      value: 0,
      min: -100,
      max: 100,
    },
    {
      id: 4,
      name: "Exposure",
      value: 0,
      min: -100,
      max: 100,
    },
    {
      id: 5,
      name: "Hue",
      value: 0,
      min: 0,
      max: 100,
    },
    {
      id: 6,
      name: "Sharpen",
      value: 0,
      min: 0,
      max: 100,
    },
    {
      id: 7,
      name: "Opacity",
      value: 0,
      min: 0,
      max: 100,
    },
    {
      id: 8,
      name: "Saturation",
      value: 0,
      min: -100,
      max: 100,
    },
    {
      id: 9,
      name: "Noise",
      value: 0,
      min: 0,
      max: 100,
    },
    {
      id: 10,
      name: "Clip",
      value: 0,
      min: 0,
      max: 100,
    },
  ],
};
const adjustmentReducer = (state, action) => {
  switch (action.type) {
    case "FLIP":
      state.flip = !state.flip;
      return { ...state };
    case "ADJUSMENT":
      const item = state.adjusments.find(
        (item) => item.id === action.payload.id
      );
      item.value = action.payload.value;
      console.log(item.value);
      return {
        ...state,
        adjusments: [...state.adjusments],
      };
    case "RADIUS":
      state.radius.value = action.payload.value;
      return {
        ...state,
      };
    default:
      return { ...state };
  }
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
