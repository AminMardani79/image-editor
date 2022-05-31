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

const Settings = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <SettingContainer
      className={styles.settingsContainer}
      lightMode={lightMode}
    >
      <div className={styles.topSettings}>
        <SettingsIcon />
        <div className={styles.radius}>
          <span>name</span>
          <input type="range" min="0" max="100" />
          <span>10 %</span>
        </div>
        <div className={styles.mirror}>
          <MirrorIcon />
        </div>
      </div>
      <Adjusment />
    </SettingContainer>
  );
};

export default Settings;
