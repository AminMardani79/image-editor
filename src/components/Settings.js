import React, { useContext } from "react";
// styles
import styles from "../assets/css/Settings.module.css";
// components
import { SettingContainer } from "./Elements/SettingElements";
// context
import { LightModeContext } from "../context/LightModeContextProvider";

const Settings = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <SettingContainer
      className={styles.settingsContainer}
      lightMode={lightMode}
    >
      Setting
    </SettingContainer>
  );
};

export default Settings;
