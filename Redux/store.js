import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./reducers/teams";
import matchesReducer from "./reducers/matches";
import tournamentReducer from "./reducers/tournament";
import playersReducer from "./reducers/players";
import uiReducer from "./reducers/UI";

const store = configureStore({
  reducer: {
    teams: teamsReducer,
    matches: matchesReducer,
    tournament: tournamentReducer,
    players: playersReducer,
    ui: uiReducer,
  },
});

export default store;
