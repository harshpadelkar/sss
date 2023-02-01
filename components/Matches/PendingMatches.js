import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import StickyButton from "../UI/StickyButton";
import Match from "./Match";
import styles from "./PendingMatches.module.css";

const PendingMatches = (props) => {
  const matches = useSelector((state) => state.matches);

  return (
    <div className={styles["matches-container"]}>
      <div className={styles.matches}>
        {matches.matches.map((match, i) => (
          <Match
            key={match.id}
            matchNumber={match.matchNumber}
            firstTeam={match.firstTeam.name}
            secondTeam={match.secondTeam.name}
            date={match.date}
            time={match.time}
          />
        ))}
      </div>

      <Link href="/home/new-match">
        <StickyButton>Start a Match</StickyButton>
      </Link>
    </div>
  );
};

export default PendingMatches;
