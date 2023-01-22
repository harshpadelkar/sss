import React from "react";
import Button from "../UI/Button";
import styles from "./Match.module.css";

const Match = (props) => {
  return (
    <li className={styles.match}>
      <div className={styles.strip}>
        <div className={styles.type}>Match No. {props.matchNumber}</div>
        <div className={styles.status}>Ongoing</div>
      </div>

      <div className={styles.details}>
        <p>
          Started at {props.date} {props.time}
        </p>
        <p>
          <span>{props.firstTeam}</span> VS <span>{props.secondTeam}</span>
        </p>
        <Button className={`${styles.button}`}>Edit</Button>
      </div>
    </li>
  );
};

export default Match;
