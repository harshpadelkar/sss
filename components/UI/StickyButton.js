import React from "react";
import styles from "./StickyButton.module.css";

const StickyButton = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default StickyButton;
