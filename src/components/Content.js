import React, { useContext } from "react";

// components
import Picture from "./Picture";
import Settings from "./Settings";
import { ContentContainer } from "./Elements/ContentElements";
// context
import { LightModeContext } from "../context/LightModeContextProvider";

const Content = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <ContentContainer lightMode={lightMode}>
      <Picture />
      <Settings />
    </ContentContainer>
  );
};

export default Content;
