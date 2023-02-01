import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TEAM } from "../../Redux/reducers/teams";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./CreateTeamForm.module.css";

const CreateTeamForm = (props) => {
  const teams = useSelector((state) => state.teams.teams);
  const dispatch = useDispatch();

  const teamNameRef = useRef();
  const locationRef = useRef();

  const [isError, setIsError] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredTeamName = teamNameRef.current.value;
    const enteredLocation = locationRef.current.value;

    console.log(enteredTeamName);

    if (enteredTeamName === "") {
      setIsError("Please enter the Team Name");
      return;
    }

    const team = {
      id: `t${teams.length + 1}`,
      name: enteredTeamName,
      players: [],
      logo: null,
    };

    dispatch(ADD_TEAM(team));

    props.onClick();
    console.log(teams);
  };

  return (
    <Modal onClick={props.onClick} type="Add Team">
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div>
          <Input
            ref={teamNameRef}
            input={{
              id: styles.teamName,
              type: "text",
              placeholder: "Team Name",
            }}
          />
          {isError && <p className={styles.error}>Please add Team Name</p>}
        </div>

        <div>
          <Input
            ref={locationRef}
            input={{
              id: styles.location,
              type: "text",
              placeholder: "Location",
            }}
          />
        </div>

        <Button onClick={formSubmitHandler} type="submit">
          Create a Team
        </Button>
      </form>
    </Modal>
  );
};

export default CreateTeamForm;
