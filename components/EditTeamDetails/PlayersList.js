import React from "react";
import DeleteIcon from "../../public/DeleteIcon";
import EditIcon from "../../public/EditIcon";
import PlayerIcon from "../../public/PlayerIcon";
import styles from "./PlayersList.module.css";

const PlayersList = (props) => {
  return (
    <li className={styles.panel}>
      <div className={styles.playerName}>
        <div className={styles.buttons}>
          <PlayerIcon />
          <p>{props.playerName}</p>
        </div>

        <div className={styles.buttons}>
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
      <div className={styles["setting-content"]}></div>
    </li>
  );
};

export default PlayersList;
