import React from "react";
import Team from "../TeamsData/Team";
import styles from "./EditTeamsForm.module.css";

const teamNames = [
  {
    key: "m1",
    name: "Ekvira Xi",
  },
  {
    key: "m2",
    name: "Ekvira Xi",
  },
  {
    key: "m3",
    name: "Ekvira Xi",
  },
];

const EditTeamsForm = (props) => {
  return (
    <div className={styles.teams}>
      <ul className={styles["team-list"]}>
        {teamNames.map((team) => (
          <Team key={team.key} name={team.name} />
        ))}
      </ul>

      <button className={styles["create-team--Btn"]}>Create a Team</button>
    </div>
  );
};

export default EditTeamsForm;
