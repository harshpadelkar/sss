import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.showModalHandler} className={styles.backdrop}></div>
  );
};

export default Backdrop;
