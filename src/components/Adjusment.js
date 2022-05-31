import React from "react";
// styles
import styles from "../assets/css/Adjusment.module.css";
// components
import AdjusmentItem from "./AdjusmentItem";
import { AdjusmentIcon } from "./Elements/SettingElements";

const Adjusment = () => {
  return (
    <div className={styles.adjusments}>
      <AdjusmentIcon />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
      <AdjusmentItem />
    </div>
  );
};

export default Adjusment;
