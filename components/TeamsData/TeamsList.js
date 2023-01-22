import React from "react";
import Team from "./Team";
import styles from "./TeamsList.module.css";

const TeamsList = (props) => {
  return (
    <ul className={styles.teamsList}>
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
    </ul>
  );
};

export default TeamsList;
