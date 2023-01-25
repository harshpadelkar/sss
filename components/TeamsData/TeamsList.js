import React from "react";
import { useSelector } from "react-redux";
import Team from "./Team";
import styles from "./TeamsList.module.css";

const TeamsList = (props) => {
  const teams = useSelector((state) => state.teams);

  return (
    <ul className={styles.teamsList}>
      {teams.map((team) => (
        <Team
          teamBHandler={props.teamBHandler}
          teamAHandler={props.teamAHandler}
          className={styles.team}
          id={team.id}
          key={team.id}
          name={team.name}
          logo={team.logo}
        />
      ))}
    </ul>
  );
};

export default TeamsList;
