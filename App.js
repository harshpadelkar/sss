import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import NoMatches from "./components/Matches/NoMatches";
import PendingMatches from "./components/Matches/PendingMatches";
import TeamsModal from "./components/TeamsData/TeamsModal";
import MatchesProvider from "./components/matches-context/MatchesProvider";

function App() {
  return (
    <MatchesProvider>
      {/* <TeamsModal /> */}
      <Header />
      {/* <NoMatches /> */}
      <PendingMatches />
    </MatchesProvider>
  );
}

export default App;
