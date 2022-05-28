import React, { createContext, useState } from "react";

export const LightModeContext = createContext();

const LightModeContextProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

export default LightModeContextProvider;
