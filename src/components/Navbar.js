import React from "react";
// styles
import styles from "../assets/css/Navbar.module.css";
// icons
import { MdOutlineToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <h1 className={styles.navbarTitle}>
        Image Editor <span>By Amin Mardani</span>
      </h1>
      <div className={styles.toggleMode}>
        <div className={styles.modeTitle}>
          <span>Light Mode</span>
        </div>
        <div className={styles.modeIcons}>
          <MdOutlineToggleOn />
          <MdToggleOff />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
