import { createSlice } from '@reduxjs/toolkit';
import { converteAltura } from '../utils/converteAltura';

type IImc = {
  peso: number;
  altura: number;
  total: number;
};

const initialState: IImc = {
  peso: 0,
  altura: 0,
  total: 0,
};



const imcSlice = createSlice({
  name: 'imc',
  initialState,
  reducers: {
    changePeso: (state, action) => {
      state.peso = action.payload.peso;
      if(action.payload.peso > 0 && state.altura > 0) {
        state.total = action.payload.peso / (converteAltura(state.altura) * converteAltura(state.altura));
      }
    },
    changeAltura: (state, action) => {
      state.altura = action.payload.altura;
      if(action.payload.altura > 0 && state.peso > 0) {
        state.total = state.peso / (action.payload.altura/100 * action.payload.altura/100);
      }
    },
  },
});

export default imcSlice.reducer;
export const { changePeso, changeAltura } = imcSlice.actions;