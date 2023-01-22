import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import * as ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalWindow = (props) => {
  return (
    <div>
      <div className={styles.modal}>{props.children}</div>
    </div>
  );
};

const overlay = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, overlay)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        overlay
      )}
    </Fragment>
  );
};

export default Modal;
