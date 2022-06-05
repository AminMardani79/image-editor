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
  const changeHandler = (e) => {
    console.log(e);
  };
  return (
    <PictureContainer className={styles.pictureContainer} lightmode={lightMode}>
      <PictureLoader></PictureLoader>
      <Options>
        <div className={styles.optionsContainer}>
          <input type="file" onChange={changeHandler} />
          <Insert lightmode={lightMode.toString()} />
          <DownLoad lightmode={lightMode.toString()} />
          <Delete lightmode={lightMode.toString()} />
        </div>
      </Options>
    </PictureContainer>
  );
};

export default Picture;
