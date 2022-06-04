import React, { useContext } from "react";
// styles
import styles from "../assets/css/Picture.module.css";
// components
import {
  PictureContainer,
  Options,
  PictureLoader,
  DownLoad,
  Delete,
  Insert,
} from "./Elements/PictureElements";
// context
import { LightModeContext } from "../context/LightModeContextProvider";

const Picture = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <PictureContainer className={styles.pictureContainer} lightMode={lightMode}>
      <PictureLoader></PictureLoader>
      <Options>
        <div className={styles.optionsContainer}>
          <Insert lightMode={lightMode} />
          <DownLoad lightMode={lightMode} />
          <Delete lightMode={lightMode} />
        </div>
      </Options>
    </PictureContainer>
  );
};

export default Picture;
