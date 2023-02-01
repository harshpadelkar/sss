import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    {
      id: "t1",
      name: "Mumbai Indians",
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
  ],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    ADD_TEAM(state, action) {
      state.teams.push(action.payload);
    },
  },
});

export const { ADD_TEAM } = teamsSlice.actions;

export default teamsSlice.reducer;
