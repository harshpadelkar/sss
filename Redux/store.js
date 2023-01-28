import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./reducers/teams";

const store = configureStore({
  reducer: { teams: teamsReducer },
});

export default store;
