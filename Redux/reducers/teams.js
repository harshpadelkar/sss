import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [
    {
      id: "t1",
      name: "Mumbai Indians",
      players: [],
      logo: null,
      matchesPlayed: 0,
      matchesWon: 0,
    },
    {
      id: "t2",
      name: "Royal Chembur",
      players: [],
      logo: null,
      matchesPlayed: 0,
      matchesWon: 0,
    },
    {
      id: "t3",
      name: "Aslfa XI",
      players: [],
      logo: null,
      matchesPlayed: 0,
      matchesWon: 0,
    },
  ],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    ADD_TEAM(state, action) {
      const team = action.payload;
      state.teams.push({
        id: team.id,
        name: team.name,
        logo: team.logo,
        players: [],
        matchesPlayed: 0,
        matchesWon: 0,
      });
    },
  },
});

export const { ADD_TEAM } = teamsSlice.actions;

export default teamsSlice.reducer;
