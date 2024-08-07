import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    goToStep: (state, action) => {
      state.step = action.payload;
    }
  },
});

export default stepSlice.reducer;
export const { nextStep, prevStep, goToStep } = stepSlice.actions;