import React from "react";
import Button from "../UI/Button";
import Match from "./Match";
import styles from "./PendingMatches.module.css";

const pendingMatchesArray = [
  {
    id: "m1",
    firstTeam: "Kanjur",
    secondTeam: "Bhandup",
    overs: "2",
    winner: "Kanjur",
    choose: "bat",
    date: "25/05/2022",
    time: "21:36:4",
    status: "pending",
  },
  {
    id: "m2",
    firstTeam: "Kanjur",
    secondTeam: "Bhandup",
    overs: "0",
    role: "bat",
    date: "25/05/2022",
    time: "21:36:4",
    staus: "completed",
  },
  {
    id: "m3",
    firstTeam: "Kanjur",
    secondTeam: "Santakruz",
    overs: "0",
    role: "bat",
    date: "25/05/2022",
    time: "21:36:4",
    status: "pending",
  },
];

const PendingMatches = (props) => {
  return (
    <div className={styles["matches-container"]}>
      <Button className={styles.addMatchButton}>Start Match</Button>

      <ul className={styles.matches}>
        {pendingMatchesArray.map((match, i, matches) => (
          <Match
            key={match.id}
            matchNumber={i}
            firstTeam={match.firstTeam}
            secondTeam={match.secondTeam}
            date={match.date}
            time={match.time}
          />
        ))}
      </ul>
    </div>
  );
};

export default PendingMatches;
