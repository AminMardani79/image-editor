import React, { useContext } from "react";
// styles
import styles from "../assets/css/Picture.module.css";
// components
import {
  PictureContainer,
  Options,
  PictureLoader,
} from "./Elements/PictureElements";
// context
import { LightModeContext } from "../context/LightModeContextProvider";

const Picture = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <PictureContainer className={styles.pictureContainer} lightMode={lightMode}>
      <PictureLoader>Loader</PictureLoader>
      <Options>Options</Options>
    </PictureContainer>
  );
};

export default Picture;
