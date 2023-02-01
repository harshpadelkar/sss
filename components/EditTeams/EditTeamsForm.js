import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CreateTeamForm from "../TeamsData/CreateTeamForm";
import Team from "../TeamsData/Team";
import StickyButton from "../UI/StickyButton";
import styles from "./EditTeamsForm.module.css";

const EditTeamsForm = (props) => {
  const teams = useSelector((state) => state.teams);
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <Fragment>
      {showForm && <CreateTeamForm onClick={showFormHandler} />}
      <div className={styles.teams}>
        <ul className={styles["team-list"]}>
          {teams.teams.map((team) => (
            <Team key={team.id} name={team.name} />
          ))}
        </ul>

        <StickyButton onClick={showFormHandler} type="submit">
          Create a Team
        </StickyButton>
      </div>
    </Fragment>
  );
};

export default EditTeamsForm;
