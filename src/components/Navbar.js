import React, { useState } from "react";
// styles
import styles from "../assets/css/Navbar.module.css";
// components
import { ToggleOff, ToggleOn } from "./Elements/NavbarElements";

const Navbar = () => {
  const [lightMode, setLightMode] = useState(true);
  const toggleHandler = () => {
    setLightMode((prev) => !prev);
  };
  return (
    <div className={styles.navbarContainer}>
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
    </div>
  );
};

export default Navbar;
