import React, { useContext, useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";
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
import { click } from "@testing-library/user-event/dist/click";
const caman = window.Caman;

// variables
let isRendering = false;
let prevRenderList = {},
  curRenderList = {};
let backlog = 0;
let updateImgFn = () => {};

const throttledEventListen = throttle(
  (curRenderList) => updateImgFn(curRenderList),
  1000
);
caman.Event.listen("processStart", (job) => {
  isRendering = true;
});
caman.Event.listen("processComplete", (job) => {
  isRendering = false;
  backlog = 0;
  if (JSON.stringify(prevRenderList) !== JSON.stringify(curRenderList)) {
    throttledEventListen(curRenderList);
  }
});
const htmlCanvas = "#picture-canvas";
caman(htmlCanvas, function () {
  this.render();
});
const Picture = () => {
  // context
  const { lightMode } = useContext(LightModeContext);
  const { filterList, setFilterList } = useContext(AdjusmentContext);
  // variables
  const [fileName, setFileName] = useState("");
  const [fileImage, setFileImage] = useState(null);
  const canvas = useRef();
  let img = new Image();
  const updateImage = (adjustmentList) => {
    prevRenderList = adjustmentList;
    caman(htmlCanvas, function () {
      this.revert(false);
      for (const filter in adjustmentList) {
        if (this[filter]) {
          this[filter](adjustmentList[filter]);
        } else {
          console.log(`~${filter}~ is not a valid filter.`);
        }
      }
      this.render();
    });
  };
  updateImgFn = updateImage; // Save function so Caman Event listener can call it
  const throttled = useRef(
    throttle((curRenderList) => updateImage(curRenderList), 100)
  );
  useEffect(() => {
    // Check for invalid filters
    let filters = { ...filterList };
    for (const filter in filterList) {
      if (!caman.prototype[filter]) {
        delete filters[filter];
        setFilterList(filters);
      }
    }
    curRenderList = filters;
    if (JSON.stringify(prevRenderList) !== JSON.stringify(filters)) {
      if (!isRendering) {
        if (backlog) {
          isRendering = true;
        }
        throttled.current(filters); // Throttled calls updateImage()
        backlog += 1;
      }
    }
  }, [filterList]);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (CheckImage(file)) {
      setFileName(file.name);
      setFileImage(file);
      reader.readAsDataURL(file);
    }
    SetImage(reader);
  };
  const clickHandler = (e) => {
    e.target.value = null;
  };
  const SetImage = (reader) => {
    const ctx = canvas.current.getContext("2d");
    reader.addEventListener(
      "load",
      () => {
        img = new Image();
        img.src = reader.result;
        img.onload = function () {
          updateCanvas(img, ctx);
        };
      },
      false
    );
  };
  const updateCanvas = (img, ctx) => {
    canvas.current.width = 800;
    canvas.current.height = 600;
    ctx.save();
    ctx.drawImage(img, 0, 0, 800, 600);
    ctx.restore();
    canvas.current.removeAttribute("data-caman-id");
    updateImage(curRenderList);
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
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    img.src = "";
  };
  return (
    <PictureContainer className={styles.pictureContainer} lightmode={lightMode}>
      <PictureLoader id="picture-canvas" ref={canvas}></PictureLoader>
      <Options>
        <div className={styles.optionsContainer}>
          <div className={styles.uploadContainer}>
            <label className={styles.uploader} htmlFor="inputFile">
              <Insert lightmode={lightMode.toString()} />
            </label>
            <input
              type="file"
              id="inputFile"
              onChange={changeHandler}
              onClick={clickHandler}
            />
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
