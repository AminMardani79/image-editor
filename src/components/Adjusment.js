import React, { useContext } from "react";
// styles
import styles from "../assets/css/Adjusment.module.css";
// components
import AdjusmentItem from "./AdjusmentItem";
import { AdjusmentIcon } from "./Elements/SettingElements";
// context
import { AdjusmentContext } from "../context/AdjusmentContextProvider";
import { LightModeContext } from "../context/LightModeContextProvider";

const Adjusment = () => {
  const { state } = useContext(AdjusmentContext);
  const { lightMode } = useContext(LightModeContext);
  return (
    <div className={styles.adjusments}>
      <AdjusmentIcon lightMode={lightMode} />
      {state.adjusments.map((item) => {
        return <AdjusmentItem key={item.id} state={item} />;
      })}
    </div>
  );
};

export default Adjusment;
