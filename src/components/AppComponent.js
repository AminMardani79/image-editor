import React, { useContext } from "react";
// components
import Navbar from "./Navbar";
import Content from "./Content";
import { AppContainer } from "./Elements/AppElements";
// context
import { LightModeContext } from "../context/LightModeContextProvider";
const AppComponent = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <AppContainer className="App" lightMode={lightMode}>
      <Navbar />
      <Content />
    </AppContainer>
  );
};

export default AppComponent;
