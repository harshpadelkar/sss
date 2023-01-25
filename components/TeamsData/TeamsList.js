import React from "react";
import { useSelector } from "react-redux";
import Team from "./Team";
import styles from "./TeamsList.module.css";

const TeamsList = (props) => {
  const teams = useSelector((state) => state.teams);

  return (
    <ul className={styles.teamsList}>
      {teams.map((team) => (
        <Team className={styles.team} key={team.id} name={team.name} />
      ))}
    </ul>
  );
};

export default TeamsList;
