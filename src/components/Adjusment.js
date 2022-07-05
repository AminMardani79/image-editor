import React, { useContext } from "react";
// styles
import styles from "../assets/css/Adjusment.module.css";
// components
import AdjusmentItem from "./AdjusmentItem";
import { AdjusmentIcon } from "./Elements/SettingElements";
// context
import { LightModeContext } from "../context/LightModeContextProvider";

const Adjusment = () => {
  const { lightMode } = useContext(LightModeContext);
  // -100 to 100
  const filtersFullRange = [
    "brightness",
    "contrast",
    "vibrance",
    "saturation",
    "exposure",
  ];
  // 0 to 100
  const filtersHalfRange = ["hue", "sepia", "noise", "sharpen", "clip"];
  const filtersSpecial = { gamma: { min: 0, init: 1, max: 10, step: 0.1 } };
  let rangeList = {};

  const rangeFull = { min: -100, init: 0, max: 100 };
  for (const filter of filtersFullRange) {
    rangeList[filter] = rangeFull;
  }

  const rangeHalf = { min: 0, init: 0, max: 100 };
  for (const filter of filtersHalfRange) {
    rangeList[filter] = rangeHalf;
  }
  rangeList = { ...rangeList, ...filtersSpecial };

  let filters = [];
  for (const filter in rangeList) {
    filters.push(
      <AdjusmentItem key={filter} filter={filter} range={rangeList[filter]} />
    );
  }
  return (
    <div className={styles.adjusments}>
      <AdjusmentIcon lightmode={lightMode.toString()} />
      {filters}
    </div>
  );
};

export default Adjusment;
