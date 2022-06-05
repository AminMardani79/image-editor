import React, { useContext } from "react";
// styles
import styles from "../assets/css/Settings.module.css";
// components
import {
  SettingContainer,
  SettingsIcon,
  MirrorIcon,
} from "./Elements/SettingElements";
import Adjusment from "./Adjusment";
// context
import { LightModeContext } from "../context/LightModeContextProvider";
import { AdjusmentContext } from "../context/AdjusmentContextProvider";

const Settings = () => {
  const { lightMode } = useContext(LightModeContext);
  const { state, dispatch } = useContext(AdjusmentContext);
  const {
    radius: { min, max, name, value },
  } = state;
  const changeHandler = (event) => {
    dispatch({ type: "RADIUS", payload: { value: event.target.value } });
  };
  return (
    <SettingContainer
      className={styles.settingsContainer}
      lightmode={lightMode}
    >
      <div className={styles.topSettings}>
        <SettingsIcon lightmode={lightMode.toString()} />
        <div className={styles.radius}>
          <span className={styles.radiusTitle}>{name}</span>
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={changeHandler}
          />
          <span className={styles.radiusValue}>{value} %</span>
        </div>
        <div className={styles.mirror}>
          <MirrorIcon onClick={() => dispatch({ type: "FLIP" })} />
        </div>
      </div>
      <Adjusment />
    </SettingContainer>
  );
};

export default Settings;
