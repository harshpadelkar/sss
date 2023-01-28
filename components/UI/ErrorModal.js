import React, { useRef, useEffect } from "react";
import styles from "./ErrorModal.module.css";
import Modal from "../Modal/Modal";

const ErrorModal = (props) => {
  return (
    <Modal type="Error">
      <p className={styles.error}>{props.children}</p>
    </Modal>
  );
};

export default ErrorModal;
