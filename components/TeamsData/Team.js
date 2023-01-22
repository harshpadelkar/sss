import React, { useEffect, useState } from "react";
import styles from "./Team.module.css";
import teamLogo from "../assets/team-logo.png";
import Image from "next/image";

const Team = (props) => {
  return (
    <li className={styles.team} onClick={props.onClick}>
      <Image alt="team logo" className={styles.image} src={teamLogo} />
      <p className={styles.teamName}>{props.name}</p>
    </li>
  );
};

export default Team;
