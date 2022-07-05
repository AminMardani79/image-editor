import React, { useContext } from "react";
// styles
import styles from "../assets/css/AdjusItem.module.css";
// context
import { AdjusmentContext } from "../context/AdjusmentContextProvider";

const AdjusmentItem = ({ filter, range }) => {
  const { filterList, setFilterList } = useContext(AdjusmentContext);
  const min = range["min"] != null ? range["min"] : -100;
  const max = range["max"] != null ? range["max"] : 100;
  const step = range["step"] || 1;
  const init = range["init"] || 0;
  const curValue = filterList[filter] != null ? filterList[filter] : init;

  /* Sliders Callback */
  function updateFilters(event, init) {
    const filter = event.target.name;
    const value = parseFloat(event.target.value);

    let newList;
    if (value === init) {
      newList = { ...filterList };
      delete newList[filter];
    } else {
      newList = { ...filterList, [filter]: value };
    }
    setFilterList(newList);
  }
  return (
    <div className={styles.adjusmentsItem}>
      <span className={styles.adjusmentTitle}>{filter}</span>
      <input
        type="range"
        id={filter}
        name={filter}
        step={step}
        min={min}
        max={max}
        value={curValue}
        onChange={(e) => updateFilters(e, init)}
      />
      <span className={styles.adjusmentValue}>{curValue} %</span>
    </div>
  );
};

export default AdjusmentItem;
