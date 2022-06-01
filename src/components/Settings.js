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
  const changeHandler = (event) => {
    dispatch({ type: "RADIUS", payload: { value: event.target.value } });
  };
  return (
    <SettingContainer
      className={styles.settingsContainer}
      lightMode={lightMode}
    >
      <div className={styles.topSettings}>
        <SettingsIcon />
        <div className={styles.radius}>
          <span>{state.radius.name}</span>
          <input
            type="range"
            min={state.radius.min}
            max={state.radius.max}
            value={state.radius.value}
            onChange={changeHandler}
          />
          <span>{state.radius.value} %</span>
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
