import React from "react";
import styles from "./DivContainer.module.css";

const DivContainer = (props) => {
  return (
    <div
      className={`${styles.container} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default DivContainer;
