import React, { useContext } from "react";
// styles
import styles from "../assets/css/Adjusment.module.css";
// components
import AdjusmentItem from "./AdjusmentItem";
import { AdjusmentIcon } from "./Elements/SettingElements";
// context
import { AdjusmentContext } from "../context/AdjusmentContextProvider";

const Adjusment = () => {
  const { state } = useContext(AdjusmentContext);
  return (
    <div className={styles.adjusments}>
      <AdjusmentIcon />
      {state.adjusments.map((item) => {
        return <AdjusmentItem key={item.id} state={item} />;
      })}
    </div>
  );
};

export default Adjusment;
