import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../UI/Backdrop";

const ModalWindow = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      <ModalWindow>{props.children}</ModalWindow>
      <Backdrop showModalHandlerA={props.showModalHandlerA} />
    </Fragment>
  );
};

export default Modal;
