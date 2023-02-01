import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matches: [
    // {
    //   id: "m1",
    //   firstTeam: { name: "Chembur XI" },
    //   secondTeam: { name: "Kanjur XI" },
    //   date: "23/03/2023",
    //   time: "12:54",
    // },
    // {
    //   id: "m2",
    //   firstTeam: { name: "Chembur XI" },
    //   secondTeam: { name: "Kanjur XI" },
    //   date: "23/03/2023",
    //   time: "12:54",
    // },
    // {
    //   id: "m3",
    //   firstTeam: { name: "Chembur XI" },
    //   secondTeam: { name: "Kanjur XI" },
    //   date: "23/03/2023",
    //   time: "12:54",
    // },
  ],
};

const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    ADD_MATCH(state, action) {
      state.matches.unshift(action.payload);
    },
  },
});

export const { ADD_MATCH } = matchSlice.actions;

export default matchSlice.reducer;
