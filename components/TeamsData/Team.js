import React, { useEffect, useState } from "react";
import styles from "./Team.module.css";
import teamLogo from "../assets/team-logo.png";
import Image from "next/image";

const Team = (props) => {
  const [teamName, setTeamName] = useState("");

  const teamNameConverter = () => {
    if (props.name.length < 11) {
      setTeamName(<p>{props.name}</p>);
    } else {
      const FinalTeamName = props.name.split(" ").map((word) => <p>{word}</p>);
      setTeamName(FinalTeamName);
    }
  };

  useEffect(teamNameConverter, []);

  return (
    <li className={styles.team} onClick={props.onClick}>
      <Image alt="team logo" className={styles.image} src={teamLogo} />
      <div className={styles.teamName}>{teamName}</div>
    </li>
  );
};

export default Team;
