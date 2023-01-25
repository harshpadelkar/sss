import { Fragment, use, useState } from "react";
import TeamsModal from "../TeamsData/TeamsModal";
import Input from "../UI/Input";
import StickyButton from "../UI/StickyButton";
import styles from "./NewMatch.module.css";
import Image from "next/image";

const NewMatch = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);

  const showModalHandler = () => {
    setIsShowModal(!isShowModal);
  };

  const teamAHandler = (team) => {
    setTeamA(team);
    showModalHandler();
  };

  const teamBHandler = (team) => {
    setTeamB(team);
    showModalHandler();
  };

  return (
    <Fragment>
      {isShowModal && (
        <TeamsModal
          teamAHandler={teamAHandler}
          teamBHandler={teamBHandler}
          showModalHandler={showModalHandler}
        />
      )}

      <form className={styles.form}>
        <div className={styles.teams}>
          <div id="FirstTeam">
            <p className={styles["select-team"]}>Select Team</p>
            <span onClick={showModalHandler} className={styles["add-button"]}>
              {teamA ? <Image alt="team logo" fill src={teamA.logo} /> : "+"}
            </span>
            <p>{teamA ? teamA.name : "Team A"}</p>
          </div>
          <div id="SecondTeam">
            <p className={styles["select-team"]}>Select Team</p>
            <span onClick={showModalHandler} className={styles["add-button"]}>
              +
            </span>
            <p>{teamB ? teamB.name : "Team B"}</p>
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
