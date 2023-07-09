import React, { useRef, useState } from "react";
import styles from "./CreateNewPlayerForm.module.css";
import Modal from "../Modal/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { ADD_PLAYER } from "../../Redux/reducers/players";
import { useDispatch, useSelector } from "react-redux";

const CreateNewPlayerForm = (props) => {
  const [isError, setIsError] = useState(null);
  const playerNameInputRef = useRef();

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredPlayerName = playerNameInputRef.current.value;

    if (enteredPlayerName.trim() === "") {
      setIsError("Please enter valid player name");
      return;
    }

    const playerData = {
      playerName: enteredPlayerName.trim(),
      teamId: props.team.id,
      teamName: props.team.name,
    };

    dispatch(ADD_PLAYER(playerData));
    props.showPlayerFormHandler();
  };

  return (
    <Modal onClick={props.showPlayerFormHandler}>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div>
          <Input
            ref={playerNameInputRef}
            input={{
              id: styles.playerName,
              placeholder: "Player Name",
              type: "text",
            }}
          />
          {isError && <p className={styles.error}>{isError}</p>}
        </div>

        <Button onClick={formSubmitHandler} type="submit">
          Create a Team
        </Button>
      </form>
    </Modal>
  );
};

export default CreateNewPlayerForm;
