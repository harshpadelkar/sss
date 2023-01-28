import styles from "./TeamsModal.module.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import TeamsList from "./TeamsList";
import { useEffect, useRef } from "react";

const TeamsModal = (props) => {
  const clickHandler = () => {
    props.showModalHandlerA && props.showModalHandlerA();
    props.showModalHandlerB && props.showModalHandlerB();
  };

  return (
    <Modal
      onClick={clickHandler}
      type="Select Teams"
      showModalHandlerA={props.showModalHandlerA}
      showModalHandlerB={props.showModalHandlerB}
    >
      <div className={styles.options}>
        <p>Option 1</p>
        <Button className={styles.buttonAdd}>Create New Team</Button>
        <p>Option 2</p>
        <TeamsList
          teamBHandler={props.teamBHandler}
          teamAHandler={props.teamAHandler}
        />
      </div>
    </Modal>
  );
};

export default TeamsModal;
