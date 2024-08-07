import { createSlice } from "@reduxjs/toolkit";

type ITheme = {
  colorScheme: 'dark' | 'light';
  counter: number;
}

const initialState: ITheme = {
  colorScheme: 'dark',
  counter: 0,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState, // Short-hand, por causa o nome do objeto é o mesmo da chave
  reducers: {
    // Todas as funções de alteração de dados no slice.
    /*
      state representa o valor atual no Redux.
      action representa o valor que está sendo passado para o Redux.

      Exemplo:
      action = {
        type: 'toggleTheme',
        payload: {
          theme: 'light',
        },
      }
    */
    // Action - Função
    // Estes parâmetros são criados pelo Redux, nós só podemos manipular a action.
    toggleTheme: (state, action) => {
      state.colorScheme = action.payload.colorScheme;
    },
    addCounter: (state) => {
      state.counter = state.counter + 1; 
    }
  },
});

//Leitura
export default themeSlice.reducer;
//Estamos disponibilizando as funções para alterar o estado (Escrita).
export const { toggleTheme, addCounter } = themeSlice.actions;