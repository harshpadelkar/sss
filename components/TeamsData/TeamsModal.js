import styles from "./TeamsModal.module.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import TeamsList from "./TeamsList";
import { Fragment, useState } from "react";
import CreateTeamForm from "./CreateTeamForm";

const TeamsModal = (props) => {
  const [showTeamModal, setShowTeamModal] = useState(false);

  const clickHandler = () => {
    props.showModalHandlerA && props.showModalHandlerA();
    props.showModalHandlerB && props.showModalHandlerB();
  };

  const createTeamHandler = () => {
    setShowTeamModal(!showTeamModal);
  };

  return (
    <Fragment>
      {showTeamModal ? (
        <CreateTeamForm onClick={createTeamHandler} />
      ) : (
        <Modal
          onClick={clickHandler}
          type="Select Teams"
          showModalHandlerA={props.showModalHandlerA}
          showModalHandlerB={props.showModalHandlerB}
        >
          <div className={styles.options}>
            <p>Option 1</p>
            <Button onClick={createTeamHandler} className={styles.buttonAdd}>
              Create New Team
            </Button>
            <p>Option 2</p>
            <TeamsList
              teamBHandler={props.teamBHandler}
              teamAHandler={props.teamAHandler}
            />
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default TeamsModal;
