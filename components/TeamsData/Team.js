import React, { useEffect, useState } from "react";
import styles from "./Team.module.css";
import teamLogo from "../assets/team-logo.png";
import Image from "next/image";

const Team = (props) => {
  const team = { name: props.name, id: props.id, logo: teamLogo };

  const clickHandler = () => {
    props.teamAHandler && props.teamAHandler(team);
    props.teamBHandler && props.teamBHandler(team);
  };

  return (
    <li
      className={props.className ? props.className : styles.team}
      onClick={clickHandler}
    >
      <Image alt="team logo" className={styles.image} src={teamLogo} />
      <p className={styles.teamName}>{props.name}</p>
    </li>
  );
};

export default Team;
