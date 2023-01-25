import styles from "./TeamsModal.module.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import TeamsList from "./TeamsList";

const TeamsModal = (props) => {
  return (
    <Modal showModalHandler={props.showModalHandler}>
      <div className={styles.teamHeader}>
        <div onClick={props.showModalHandler} className={styles.closeBtn}>
          ×
        </div>
        <p>Select Team</p>
      </div>

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
