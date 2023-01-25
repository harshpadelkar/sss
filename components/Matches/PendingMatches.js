import React from "react";
import Button from "../UI/Button";
import Match from "./Match";
import styles from "./PendingMatches.module.css";

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
