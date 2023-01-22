import React from "react";
import styles from "./NewMatch.module.css";

const NewMatch = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles.teams}>
        <div id="firstTeam">
          <span>+</span>
        </div>
        <div>
          <span>+</span>
        </div>
      </div>
      <input id={styles.overs} min="1" type="number" placeholder="Overs" />
    </form>
  );
};

export default NewMatch;
