import React, { useContext } from "react";
// styles
import styles from "../assets/css/Navbar.module.css";
// components
import {
  ToggleOff,
  ToggleOn,
  NavbarContainer,
} from "./Elements/NavbarElements";
// context
import { LightModeContext } from "../context/LightModeContextProvider";

const Navbar = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);
  const toggleHandler = () => {
    setLightMode((prev) => !prev);
  };
  return (
    <NavbarContainer className={styles.navbarContainer} lightMode={lightMode}>
      <h2 className={styles.navbarTitle}>
        Image Editor <span>By Amin Mardani</span>
      </h2>
      <div className={styles.toggleMode}>
        <div className={styles.modeTitle}>
          <span>Light Mode</span>
        </div>
        <div className={styles.modeIcons} onClick={toggleHandler}>
          {lightMode ? <ToggleOn /> : <ToggleOff />}
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
