import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./reducers/teams";
import matchesReducer from "./reducers/matches";
import tournamentReducer from "./reducers/tournament";

const store = configureStore({
  reducer: {
    teams: teamsReducer,
    matches: matchesReducer,
    tournament: tournamentReducer,
  },
});

export default store;
