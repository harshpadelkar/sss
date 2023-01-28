import React from "react";
import { useSelector } from "react-redux";
import Team from "../TeamsData/Team";
import StickyButton from "../UI/StickyButton";
import styles from "./EditTeamsForm.module.css";

const EditTeamsForm = (props) => {
  const teams = useSelector((state) => state.teams);

  return (
    <div className={styles.teams}>
      <ul className={styles["team-list"]}>
        {teams.teams.map((team) => (
          <Team key={team.id} name={team.name} />
        ))}
      </ul>

      <StickyButton type="submit">Create a Team</StickyButton>
    </div>
  );
};

export default EditTeamsForm;
