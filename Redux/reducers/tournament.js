import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tournament: {
    name: "Shree Sai Chashak",
    place: "Bhandup",
    squadLimit: 11,
  },
};

const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    CHANGE_TOURNAMENT_DETAILS(state, action) {
      state.tournament = action.payload;
    },
  },
});

export const { CHANGE_TOURNAMENT_DETAILS } = tournamentSlice.actions;

export default tournamentSlice.reducer;
