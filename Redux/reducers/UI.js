import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMatchHeader: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    TOGGLE_HEADER(state, action) {
      state.showMatchHeader = !state.showMatchHeader;
    },
  },
});

export const { TOGGLE_HEADER } = uiSlice.actions;

export default uiSlice.reducer;
