import React from "react";
import Team from "../TeamsData/Team";
import styles from "./EditTeamsForm.module.css";

const teamNames = [
  {
    key: "m1",
    name: "Ekvira Xi Bhandup East dasdadad adsadad adadad",
  },
  {
    key: "m2",
    name: "Ekvira Xi",
  },
  {
    key: "m3",
    name: "Ekvira Xi",
  },
  {
    key: "m4",
    name: "Ekvira Xi",
  },
  {
    key: "m5",
    name: "Ekvira Xi",
  },
  {
    key: "m6",
    name: "Ekvira Xi",
  },
  {
    key: "m8",
    name: "Ekvira Xi",
  },
  {
    key: "m7",
    name: "Ekvira Xi",
  },
  {
    key: "m9",
    name: "Ekvira Xi",
  },
  {
    key: "m10",
    name: "Ekvira Xi",
  },
  {
    key: "m11",
    name: "Ekvira Xi",
  },
  {
    key: "m12",
    name: "Ekvira Xi",
  },
  {
    key: "m13",
    name: "Ekvira Xi",
  },
  {
    key: "m14",
    name: "Ekvira Xi",
  },
  {
    key: "m105",
    name: "Ekvira Xi",
  },
  {
    key: "m106",
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
