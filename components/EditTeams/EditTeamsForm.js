import DivContainer from "../UI/DivContainer";
import React from "react";
import Team from "../TeamsData/Team";
import styles from "./EditTeamsForm.module.css";

const teamNames = [
  "Ekvira Xi",
  "Pandu Xi",
  "Harsh Xi",
  "Sakshi Xi",
  "Sarthak Xi",
  "Harsh Pandya",
  "Ekvira Xi",
  "Pandu Xi",
  "Harsh Xi",
  "Sakshi Xi",
  "Sarthak Xi",
  "Harsh Pandya",
  "Ekvira Xi",
  "Pandu Xi",
  "Harsh Xi",
  "Sakshi Xi",
  "Sarthak Xi",
  "Harsh Pandya",
];

const EditTeamsForm = (props) => {
  return (
    <div className={styles.teams}>
      <ul className={styles["team-list"]}>
        {teamNames.map((teamName) => (
          <Team name={teamName} />
        ))}
      </ul>

      <button className={styles["create-team--Btn"]}>Create a Team</button>
    </div>
  );
};

export default EditTeamsForm;
