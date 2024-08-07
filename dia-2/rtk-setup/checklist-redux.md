# Checklist - Redux Toolkit e Redux Dev Tools
*Atividade criada por Tiago Quadros*

## Objetivo
Tenha este checklist sempre em mãos para quando for configurar o Redux em algum projeto de sua preferência.
Note que o Redux não precisa ser utilizado apenas com o React, mas este checklist foi criado considerando o React como biblioteca utilizada.

# Siga os próximos passos

## Acessar o Projeto Existente
- [ ] Abra seu terminal.
- [ ] Navegue até o diretório do projeto existente:
  ```sh
  cd caminho/do/seu/projeto
  ```

## Instalar Redux Toolkit
- [ ] Execute o seguinte comando para instalar o Redux Toolkit:
  ```sh
  npm install @reduxjs/toolkit react-redux
  ```

## Configurar Redux Toolkit
- [ ] Crie uma pasta chamada `store` dentro da pasta `src` do seu projeto.
- [ ] Dentro da pasta `store`, crie um arquivo `index.js` (ou `index.ts` para TypeScript) e adicione a configuração básica do Redux Toolkit:
  ```ts
  import { configureStore } from '@reduxjs/toolkit';
  import rootReducer from './rootReducer'; // Altere para o seu reducer principal

  const store = configureStore({
    reducer: rootReducer,
  });

  export default store;

  // Inferência: tu tá usando o retorno para saber os valores disponíveis.
  // E é por isso que tu precisa colocar todos os valores iniciais no Slice.
  export type RootState = ReturnType<typeof store.getState>;
  // É frescura do Redux
  export type AppDispatch = typeof store.dispatch;
  ```

- [ ] Crie seu `reducer`, sendo que o nome do arquivo é ideal que seja feito `nomeSlice.ts`. Você pode criar vários `reducers` desde que coloque os mesmos dentro da `store` criada anteriormente.
```ts
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
```

- [ ] Envolva seu componente principal (`App.js` ou `index.js`) com o `Provider` do `react-redux`:
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import store from './store';
  import App from './App';

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  ```

## Consumir dados nos componentes
```ts
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { AppDispatch, RootState } from "../redux/store";

function Button() {
  // const teste = useSelector((state: RootState) => state.theme);
  // useSelector para extrair dados do Redux.
  const theme = useSelector((state: RootState) => state.theme.colorScheme);
  // useDispatch para enviar dados para o Redux.
  const dispatch: AppDispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleTheme({
          colorScheme: theme === 'dark' ? 'light' : 'dark',
        }));
      }}
    >{theme}</button>
  )
}

export default Button;
```

## Instalar e Configurar Redux Dev Tools
- [ ] Adicione a extensão do Redux Dev Tools ao seu navegador. [Download aqui](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [ ] No arquivo de configuração do seu store (`index.js`), adicione a configuração para habilitar o Redux Dev Tools:
  ```js
  import { configureStore } from '@reduxjs/toolkit';
  import rootReducer from './rootReducer';

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Habilita o Redux DevTools em desenvolvimento
  });

  export default store;
  ```

Seguindo esses passos, você terá o Redux Toolkit e o Redux Dev Tools configurados na sua aplicação React existente.
