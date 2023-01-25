import { Fragment, use, useState } from "react";
import TeamsModal from "../TeamsData/TeamsModal";
import Input from "../UI/Input";
import StickyButton from "../UI/StickyButton";
import styles from "./NewMatch.module.css";
import Image from "next/image";

const NewMatch = (props) => {
  const [isShowModalA, setIsShowModalA] = useState(false);
  const [isShowModalB, setIsShowModalB] = useState(false);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);

  const showModalHandlerA = () => {
    setIsShowModalA(!isShowModalA);
  };

  const showModalHandlerB = () => {
    setIsShowModalB(!isShowModalB);
  };

  const teamAHandler = (team) => {
    setTeamA(team);

    showModalHandlerA();
  };

  const teamBHandler = (team) => {
    setTeamB(team);

    showModalHandlerB();
  };

  return (
    <Fragment>
      {isShowModalA && (
        <TeamsModal
          teamAHandler={teamAHandler}
          showModalHandlerA={showModalHandlerA}
        />
      )}
      {isShowModalB && (
        <TeamsModal
          teamBHandler={teamBHandler}
          showModalHandlerB={showModalHandlerB}
        />
      )}

      <form className={styles.form}>
        <div className={styles.teams}>
          <div id="FirstTeam">
            <p className={styles["select-team"]}>Select Team</p>
            <span onClick={showModalHandlerA} className={styles["add-button"]}>
              {teamA ? <Image alt="Team Logo" src={teamA.logo} fill /> : "+"}
            </span>
            <p>{teamA ? teamA.name : "Team A"}</p>
          </div>
          <div id="SecondTeam">
            <p className={styles["select-team"]}>Select Team</p>
            <span onClick={showModalHandlerB} className={styles["add-button"]}>
              {teamB ? <Image alt="Team Logo" src={teamB.logo} fill /> : "+"}
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
