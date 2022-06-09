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
import { CheckImage, DownLoadImage } from "../helpers/functions";
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
      this.stackBlur(state.adjusments[1].value);
      this.contrast(parseInt(state.adjusments[2].value));
      this.exposure(state.adjusments[3].value);
      this.hue(state.adjusments[4].value);
      this.sharpen(state.adjusments[5].value);
      this.saturation(state.adjusments[7].value);
      this.noise(state.adjusments[8].value);
      this.clip(state.adjusments[9].value);
      this.newLayer(function () {
        this.opacity(state.adjusments[6].value);
        this.fillColor("#d2e2df");
      });
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
  const downLoadHandler = () => {
    const fileExtension = fileName.slice(-4);
    let newFilename;
    if (fileExtension === ".jpg" || fileExtension === ".png") {
      newFilename = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
    }
    DownLoadImage(canvas, newFilename);
  };
  const removeHandler = () => {
    canvas.current.remove(img);
  };
  return (
    <PictureContainer className={styles.pictureContainer} lightmode={lightMode}>
      <PictureLoader id="picture-canvas" ref={canvas}></PictureLoader>
      <Options>
        <div className={styles.optionsContainer}>
          <div className={styles.uploadContainer}>
            <label className={styles.uploader} for="inputFile">
              <Insert lightmode={lightMode.toString()} />
            </label>
            <input type="file" id="inputFile" onChange={changeHandler} />
          </div>
          <DownLoad
            lightmode={lightMode.toString()}
            onClick={downLoadHandler}
          />
          <Delete lightmode={lightMode.toString()} onClick={removeHandler} />
        </div>
      </Options>
    </PictureContainer>
  );
};

export default Picture;
