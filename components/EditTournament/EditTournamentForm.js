import { useRef, useState } from "react";

import Card from "../UI/Card";
import styles from "./EditTournamentForm.module.css";
import Button from "../UI/Button";
import DivContainer from "../UI/DivContainer";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_TOURNAMENT_DETAILS } from "../../Redux/reducers/tournament";
import ErrorModal from "../UI/ErrorModal";

function EditTournamentForm(props) {
  const tournament = useSelector((state) => state.tournament.tournament);
  const dispatch = useDispatch();

  const [hasError, setHasError] = useState(null);

  const tournamentInputRef = useRef();
  const placeInputRef = useRef();
  const squadLimitInputRef = useRef();

  const resetError = () => {
    setHasError(null);
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredTournament = tournamentInputRef.current.value;
    const enteredPlace = placeInputRef.current.value;
    const enteredSqaudLimit = +squadLimitInputRef.current.value;

    if (
      enteredTournament === "" ||
      enteredPlace === "" ||
      enteredSqaudLimit < 1
    ) {
      setHasError(`Please don't keep any field empty`);
      return;
    }

    const data = {
      name: enteredTournament,
      place: enteredPlace,
      squadLimit: enteredSqaudLimit,
    };

    dispatch(CHANGE_TOURNAMENT_DETAILS(data));
  }

  return (
    <DivContainer>
      {hasError && <ErrorModal onClick={resetError}>{hasError}</ErrorModal>}
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.input}>
          <label>Tournament Name *</label>
          <input
            defaultValue={tournament.name}
            ref={tournamentInputRef}
            type="text"
          />
        </div>

        <div className={styles.input}>
          <label>Place Name *</label>
          <input
            defaultValue={tournament.place}
            ref={placeInputRef}
            type="text"
          />
        </div>

        <div className={styles.input}>
          <label>Squad Limit *</label>
          <input
            defaultValue={tournament.squadLimit}
            ref={squadLimitInputRef}
            min="0"
            type="number"
          />
        </div>

        <Button className={styles["create-btn"]}>Update Details</Button>
      </form>
    </DivContainer>
  );
}

export default EditTournamentForm;
