import { useRef } from "react";

import Card from "../UI/Card";
import styles from "./EditTournamentForm.module.css";
import Button from "../UI/Button";
import DivContainer from "../UI/DivContainer";

function EditTournamentForm(props) {
  // const titleInputRef = useRef();
  // const imageInputRef = useRef();
  // const addressInputRef = useRef();
  // const descriptionInputRef = useRef();

  // function submitHandler(event) {
  //   event.preventDefault();

  //   const enteredTitle = titleInputRef.current.value;
  //   const enteredImage = imageInputRef.current.value;
  //   const enteredAddress = addressInputRef.current.value;
  //   const enteredDescription = descriptionInputRef.current.value;

  //   const meetupData = {
  //     title: enteredTitle,
  //     image: enteredImage,
  //     address: enteredAddress,
  //     description: enteredDescription,
  //   };

  //   props.onAddMeetup(meetupData);

  return (
    <DivContainer>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.input}>
            <label>Tournament Name *</label>
            <input type="text" />
          </div>

          <div className={styles.input}>
            <label>Place Name *</label>
            <input type="text" />
          </div>

          <div className={styles.input}>
            <label>Squad Limit *</label>
            <input min="0" type="number" />
          </div>

          <Button className={styles["create-btn"]}>Update Details</Button>
        </form>
      </div>
    </DivContainer>
  );
}

export default EditTournamentForm;
