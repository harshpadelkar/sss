import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

const teamsSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    ADD(state, action) {
      state.teams.concat(action.team);
    },
  },
});

export const { ADD } = teamsSlice.actions;

export default teamsSlice.reducer;
