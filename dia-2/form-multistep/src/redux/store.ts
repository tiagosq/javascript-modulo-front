import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";
import stepSlice from "./slices/stepSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    step: stepSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;