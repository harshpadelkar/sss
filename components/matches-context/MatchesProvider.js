import React from "react";
import MatchesContext from "./matches-context";

const DUMMY_DATA = [
  {
    id: "m1",
    firstTeam: "Kanjur",
    secondTeam: "Bhandup",
    overs: "2",
    winner: "Kanjur",
    choose: "bat",
    date: "25/05/2022",
    time: "21:36:4",
    status: "pending",
  },
  {
    id: "m2",
    firstTeam: "Kanjur",
    secondTeam: "Bhandup",
    overs: "0",
    role: "bat",
    date: "25/05/2022",
    time: "21:36:4",
    staus: "completed",
  },
  {
    id: "m3",
    firstTeam: "Kanjur",
    secondTeam: "Santakruz",
    overs: "0",
    role: "bat",
    date: "25/05/2022",
    time: "21:36:4",
    status: "pending",
  },
];

const MatchesProvider = (props) => {
  const pendingMatches = DUMMY_DATA.filter(
    (match) => match.status === "pending"
  );

  const addMatchesHandler = (match) => {};

  const removeMatchesHandler = (id) => {};

  return (
    <MatchesContext.Provider
      value={{
        matches: DUMMY_DATA,
        pendingMatches: pendingMatches,
        completedMatches: [],
        addMatch: () => {},
        removeMatch: () => {},
      }}
    >
      {props.children}
    </MatchesContext.Provider>
  );
};

export default MatchesProvider;
