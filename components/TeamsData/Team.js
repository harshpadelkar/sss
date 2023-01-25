import React, { useEffect, useState } from "react";
import styles from "./Team.module.css";
import teamLogo from "../assets/team-logo.png";
import Image from "next/image";

const Team = (props) => {
  const clickHandler = () => {
    props.teamAHandler &&
      props.teamAHandler({ name: props.name, id: props.id, logo: teamLogo });
    props.teamBHandler &&
      props.teamBHandler({ name: props.name, id: props.id, logo: teamLogo });
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
