import React from "react";
import styles from "./Match.module.css";
import Image from "next/image";
import teamLogo from "../assets/team-logo.png";
import Button from "../UI/Button";

const Match = (props) => {
  return (
    <div className={styles.match}>
      <div className={styles.header}>
        <div className={styles.status}>Live</div>
        <div className={styles.tournament}>Match no. {props.matchNumber}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.team}>
          <div className={styles["team-logo"]}>
            <Image alt="Team Logo" src={teamLogo} />
          </div>
          <h2 className={styles["team-name"]}>{props.firstTeam}</h2>
        </div>

        <div className={styles.details}>
          <div className={styles.date}>
            12 Aug at <strong>19:00</strong>
          </div>

          <div className={styles.score}>
            <span>20/3</span>
            <span className={styles.divider}>:</span>
            <span>29/1</span>
          </div>

          <button className={styles.button}>Edit</button>
        </div>

        <div className={styles.team}>
          <div className={styles["team-logo"]}>
            <Image alt="Team Logo" src={teamLogo} />
          </div>
          <h2 className={styles["team-name"]}>{props.secondTeam}</h2>
        </div>
      </div>
    </div>
  );
};

export default Match;
