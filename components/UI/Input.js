import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} className={styles.input} {...props.input} />;
});

export default Input;
