import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  const clickHandler = () => {
    props.showModalHandlerA && props.showModalHandlerA();
    props.showModalHandlerB && props.showModalHandlerB();
    props.onClick && props.onClick();
  };

  return <div onClick={clickHandler} className={styles.backdrop}></div>;
};

export default Backdrop;
