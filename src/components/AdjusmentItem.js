import React from "react";
// styles
import styles from "../assets/css/AdjusItem.module.css";

const AdjusmentItem = () => {
  return (
    <div className={styles.adjusmentsItem}>
      <span>name</span>
      <input type="range" min="0" max="100" />
      <span>10 %</span>
    </div>
  );
};

export default AdjusmentItem;
