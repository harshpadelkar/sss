import styles from "./TeamsModal.module.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import TeamsList from "./TeamsList";

const TeamsModal = (props) => {
  return (
    <Modal>
      <div className={styles.teamHeader}>
        <p className={styles.closeBtn}>×</p>
        <p>Select Team</p>
      </div>

      <div className={styles.options}>
        <p>Option 1</p>
        <Button className={styles.buttonAdd}>Create New Team</Button>
        <p>Option 2</p>
        <TeamsList />
      </div>
    </Modal>
  );
};

export default TeamsModal;
