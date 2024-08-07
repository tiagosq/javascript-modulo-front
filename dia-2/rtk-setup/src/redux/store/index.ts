import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
  }
});

// Inferência: tu tá usando o retorno para saber os valores disponíveis.
// E é por isso que tu precisa colocar todos os valores iniciais no Slice.
export type RootState = ReturnType<typeof store.getState>;
// É frescura do Redux
export type AppDispatch = typeof store.dispatch;

export default store;