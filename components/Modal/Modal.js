import React, { Fragment, useRef, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../UI/Backdrop";

const Modal = (props) => {
  const modalRef = useRef();
  const [modalHeight, setModalHeight] = useState(null);

  useEffect(() => {
    const modalHeight = modalRef.current.clientHeight / 2;
    setModalHeight(modalHeight);
  }, []);

  return (
    <Fragment>
      <div
        style={{ top: `calc(50% - ${modalHeight}px)` }}
        className={styles.modal}
      >
        <div ref={modalRef}>
          <div
            className={styles.teamHeader}
            style={{
              backgroundColor: props.type === "Error" ? "red" : "#009788",
            }}
          >
            <div onClick={props.onClick} className={styles.closeBtn}>
              ×
            </div>
            <p>{props.type}</p>
          </div>
          {props.children}
        </div>
      </div>

      <Backdrop
        showModalHandlerA={props.showModalHandlerA}
        showModalHandlerB={props.showModalHandlerB}
      />
    </Fragment>
  );
};

export default Modal;
