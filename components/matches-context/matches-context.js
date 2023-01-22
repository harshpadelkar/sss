import React from "react";

const MatchesContext = React.createContext({
  matches: [],
  pendingMatches: [],
  completedMatches: [],
  addMatch: () => {},
  removeMatch: () => {},
});

export default MatchesContext;
