import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    // {
    //   id: "p1",
    //   playerName: "Harsh",
    //   teamName: "Mumbai Indians",
    //   teamId: "t1",
    //   inningsPlayed: 0,
    //   totalRuns: 0,
    //   totalSixes: 0,
    //   totalFours: 0,
    //   image: null,
    // },
    // {
    //   id: "p2",
    //   playerName: "Sakshi",
    //   teamName: "Royal Chembur",
    //   teamId: "t2",
    //   inningsPlayed: 0,
    //   runs: 0,
    //   sixes: 0,
    //   fours: 0,
    //   image: null,
    // },
    // {
    //   id: "p3",
    //   playerName: "Dipesh",
    //   teamName: "Aslfa XI",
    //   teamId: "t3",
    //   inningsPlayed: 0,
    //   runs: 0,
    //   sixes: 0,
    //   fours: 0,
    //   image: null,
    // },
  ],
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    ADD_PLAYER(state, action) {
      const player = action.payload;

      state.players.push({
        id: `p${state.players.length + 1}`,
        playerName: player.playerName,
        teamId: player.teamId,
        teamName: player.teamName,
        sixes: 0,
        fours: 0,
        Image: null,
        inningsPlayed: 0,
      });
    },
  },
});

export const { ADD_PLAYER } = playersSlice.actions;

export default playersSlice.reducer;
