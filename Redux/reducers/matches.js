import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matches: [],
};

const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    ADD_MATCH(state, action) {
      state.matches.push(action.payload);
    },
  },
});

export const { ADD_MATCH } = matchSlice.actions;

export default matchSlice.reducer;
