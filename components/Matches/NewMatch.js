import { Fragment, useState } from "react";
import TeamsModal from "../TeamsData/TeamsModal";
import Input from "../UI/Input";
import StickyButton from "../UI/StickyButton";
import styles from "./NewMatch.module.css";

const NewMatch = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModalHandler = () => {
    setIsShowModal(true);
  };

  return (
    <Fragment>
      {isShowModal && <TeamsModal />}

      <form className={styles.form}>
        <div className={styles.teams}>
          <div id="FirstTeam">
            <p className={styles["select-team"]}>Select Team</p>
            <span onClick={showModalHandler} className={styles["add-button"]}>
              +
            </span>
            <p>Team A</p>
          </div>
          <div id="SecondTeam">
            <p className={styles["select-team"]}>Select Team</p>
            <span className={styles["add-button"]}>+</span>
            <p>Team A</p>
          </div>
        </div>

        <Input
          input={{
            id: styles.overs,
            min: "1",
            type: "number",
            placeholder: "Overs",
          }}
        />
        <Input
          input={{
            id: styles.wickets,
            min: "1",
            type: "number",
            placeholder: "Wickets",
          }}
        />
        <StickyButton type="submit">Start Match</StickyButton>
      </form>
    </Fragment>
  );
};

export default NewMatch;
