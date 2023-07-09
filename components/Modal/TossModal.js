import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_MATCH } from "../../Redux/reducers/matches";
import { TOGGLE_HEADER } from "../../Redux/reducers/UI";
import useOptionsReducer from "../Hooks/use-options";
import Team from "../TeamsData/Team";
import Button from "../UI/Button";
import Modal from "./Modal";
import styles from "./TossModal.module.css";

const TossModal = (props) => {
  const ui = useSelector((state) => state.ui);
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();

  const {
    option: tossWinner,
    dispatchOptionHandler: dispatchTossWinner,
    dispatchErrorHandler: tossError,
  } = useOptionsReducer();

  const {
    option: elelctedTo,
    dispatchOptionHandler: DispatchElecedTo,
    dispatchErrorHandler: electedToError,
  } = useOptionsReducer();

  const errorTossMessage = "Select the team who won the toss dhasduhdhsduhsjdh";
  const errorElectedMessage = "Select the decision taken by the team";

  const formSubmitHandler = () => {
    if (!tossWinner.value && !elelctedTo.value) {
      tossError(errorTossMessage);
      electedToError(errorElectedMessage);
      return;
    }

    if (!tossWinner.value) {
      tossError(errorTossMessage);
      return;
    }

    if (!elelctedTo.value) {
      electedToError(errorElectedMessage);
      return;
    }

    const id = `m${matches.matches.length + 1}`;

    const matchData = {
      ...props.matchData,
      id: id,
      matchNumber: matches.matches.length + 1,
      tossWinner: tossWinner.value,
      choose: elelctedTo.value,
      status: "Pending",
      date: new Date().getDate(),
      time: new Date().toISOString(),
    };

    dispatch(ADD_MATCH(matchData));
    dispatch(TOGGLE_HEADER());

    console.log(matches);
    props.showTossHandler();
  };

  return (
    <Modal onClick={props.showTossHandler}>
      <div className={styles.winner}>
        <p>Who wan the toss?</p>
        <div
          className={tossWinner.isOptionATouched ? styles.active : ""}
          onClick={() => {
            dispatchTossWinner("A", props.teamA);
          }}
        >
          <Team name={props?.teamA?.name} />
        </div>

        <div
          className={tossWinner.isOptionBTouched ? styles.active : ""}
          onClick={() => {
            dispatchTossWinner("B", props.teamB);
          }}
        >
          <Team name={props?.teamB?.name} />
        </div>
        {tossWinner.hasError && (
          <p className={styles.error}>{tossWinner.hasError}</p>
        )}
      </div>

      <div className={styles.decision}>
        <p>Elected to?</p>
        <h3
          className={elelctedTo.isOptionATouched ? styles.active : ""}
          onClick={() => {
            DispatchElecedTo("A", "BAT");
          }}
        >
          Bat
        </h3>
        <h3
          className={elelctedTo.isOptionBTouched ? styles.active : ""}
          onClick={() => {
            DispatchElecedTo("B", "FIELD");
          }}
        >
          Field
        </h3>
        {elelctedTo.hasError && (
          <p className={styles.error}>{elelctedTo.hasError}</p>
        )}
      </div>

      <Link href={`/home/new-match/m1`}>
        <Button onClick={formSubmitHandler} style={{ margin: "0 auto" }}>
          Start Scoring
        </Button>
      </Link>
    </Modal>
  );
};

export default TossModal;
