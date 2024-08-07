import { createSlice } from "@reduxjs/toolkit";

type IForm = {
  name: string;
  email: string;
  age: number;
};

const initialState: IForm = {
  name: "",
  email: "",
  age: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { setName, setEmail, setAge } = formSlice.actions;