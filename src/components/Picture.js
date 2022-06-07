import React, { useContext, useEffect, useRef, useState } from "react";
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
import { AdjusmentContext } from "../context/AdjusmentContextProvider";
// functions
import { CheckImage } from "../helpers/functions";
const Picture = () => {
  // context
  const { lightMode } = useContext(LightModeContext);
  const { state } = useContext(AdjusmentContext);
  // variables
  const [fileName, setFileName] = useState("");
  const canvas = useRef();
  let img = new Image();
  useEffect(() => {
    window.Caman(`#${canvas.current.id}`, img, function () {
      this.brightness(state.adjusments[0].value);
      this.contrast(1);
      this.revert(false);
      this.render();
    });
  }, [state]);
  const changeHandler = (e) => {
    const ctx = canvas.current.getContext("2d");
    const file = e.target.files[0];
    const reader = new FileReader();
    if (CheckImage(file)) {
      setFileName(file.name);
      reader.readAsDataURL(file);
    }
    reader.addEventListener(
      "load",
      () => {
        img = new Image();
        img.src = reader.result;
        img.onload = function () {
          canvas.current.width = 800;
          canvas.current.height = 600;
          ctx.drawImage(img, 0, 0, 800, 600);
          canvas.current.removeAttribute("data-caman-id");
        };
      },
      false
    );
  };
  return (
    <PictureContainer className={styles.pictureContainer} lightmode={lightMode}>
      <PictureLoader id="picture-canvas" ref={canvas}></PictureLoader>
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
