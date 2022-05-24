import React from "react";

// styles
import styles from "../assets/css/Content.module.css";

// components
import Picture from "./Picture";
import Settings from "./Settings";

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <Picture />
      <Settings />
    </div>
  );
};

export default Content;
