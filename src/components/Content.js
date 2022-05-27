import React from "react";

// components
import Picture from "./Picture";
import Settings from "./Settings";
import { ContentContainer, BgImage } from "./Elements/ContentElements";

const Content = () => {
  return (
    <ContentContainer>
      <Picture />
      <Settings />
    </ContentContainer>
  );
};

export default Content;
