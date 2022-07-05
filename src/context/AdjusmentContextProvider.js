import React, { createContext, useState } from "react";

export const AdjusmentContext = createContext();

const AdjusmentContextProvider = ({ children }) => {
  const [filterList, setFilterList] = useState({});
  return (
    <AdjusmentContext.Provider value={{ filterList, setFilterList }}>
      {children}
    </AdjusmentContext.Provider>
  );
};

export default AdjusmentContextProvider;
