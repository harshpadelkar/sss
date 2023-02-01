import { Fragment, useReducer, useRef, useState } from "react";
import TeamsModal from "../TeamsData/TeamsModal";
import Input from "../UI/Input";
import StickyButton from "../UI/StickyButton";
import styles from "./NewMatch.module.css";
import Image from "next/image";
import ErrorModal from "../UI/ErrorModal";
import { useSelector } from "react-redux";
import TossModal from "../Modal/TossModal";

const NewMatch = (props) => {
  const matches = useSelector((state) => state.matches);

  console.log(matches.matches);
  const [matchData, setMatchData] = useState();

  const oversRef = useRef();
  const wicketsRef = useRef();

  const [teamA, setTeamA] = useState(null);
  const [isShowModalA, setIsShowModalA] = useState(false);

  const [teamB, setTeamB] = useState(null);
  const [isShowModalB, setIsShowModalB] = useState(false);

  const [isShowModalToss, SetIsShowModalToss] = useState(false);

  const [isError, setIsError] = useState(null);

  /////////////////////////////////////
  /////////////Functions///////////////
  /////////////////////////////////////

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

  const showErrorHandler = () => {
    setIsError(null);
  };

  const showTossHandler = () => {
    SetIsShowModalToss(!isShowModalToss);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredOvers = oversRef.current.value;
    const enteredOversNumber = +enteredOvers;
    const enteredWickets = wicketsRef.current.value;
    const enteredWicketsNumber = +enteredWickets;

    if (enteredOvers == "" || enteredWickets === "") {
      setIsError("Please provide the complete details to start the match");
      return;
    } else if (!teamA || !teamB) {
      setIsError("Please select both the teams");
      return;
    }

    if (teamA.id === teamB.id) {
      setIsError("Please select the different teams to proceed");
      return;
    }

    if (enteredOversNumber < 1 || enteredWicketsNumber < 1) {
      setIsError("Number of overs and wickets must be above or equal 1");
      return;
    }

    SetIsShowModalToss(!isShowModalToss);

    const matchdataEl = {
      firstTeam: teamA,
      secondTeam: teamB,
      enteredOvers: enteredOversNumber,
      enteredWickets: enteredWicketsNumber,
    };

    setMatchData(matchdataEl);
    console.log(matchData);
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
      {isError && <ErrorModal onClick={showErrorHandler}>{isError}</ErrorModal>}
      {isShowModalToss && (
        <TossModal
          matchData={matchData}
          showTossHandler={showTossHandler}
          teamA={teamA}
          teamB={teamB}
        />
      )}

      <form onSubmit={formSubmitHandler} className={styles.form}>
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
          ref={oversRef}
          input={{
            id: styles.overs,
            type: "number",
            placeholder: "Overs",
          }}
        />
        <Input
          ref={wicketsRef}
          input={{
            id: styles.wickets,
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
