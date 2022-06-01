import React, { useContext } from "react";
// styles
import styles from "../assets/css/AdjusItem.module.css";
// context
import { AdjusmentContext } from "../context/AdjusmentContextProvider";

const AdjusmentItem = ({ state }) => {
  const { dispatch } = useContext(AdjusmentContext);
  const { id, name, value, min, max } = state;
  const changeHandler = (event) => {
    dispatch({ type: "ADJUSMENT", payload: { id, value: event.target.value } });
  };
  return (
    <div className={styles.adjusmentsItem}>
      <span>{name}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={changeHandler}
      />
      <span>{value} %</span>
    </div>
  );
};

export default AdjusmentItem;
