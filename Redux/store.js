import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./reducers/teams";
import matchesReducer from "./reducers/matches";

const store = configureStore({
  reducer: { teams: teamsReducer, matches: matchesReducer },
});

export default store;
