import React from "react";
import TeamsContext from "./teams-context";

const DUMMY_TEAMS = [
  {
    id: "t1",
    name: "Aslfa XI",
    players: ["Raju", "Kanju", "Praju"],
    logo: null,
  },
  {
    id: "t2",
    name: "Royal Chembur",
    players: ["Sakshi", "Rajesh", "Deodhar"],
    logo: null,
  },
  {
    id: "t3",
    name: "Aslfa XI",
    players: ["Harsh", "Sudhakar", "Padelkar"],
    logo: null,
  },
];

const TeamProvider = (props) => {
  return (
    <TeamsContext value={{ teams: DUMMY_TEAMS }}>{props.children}</TeamsContext>
  );
};

export default TeamProvider;
