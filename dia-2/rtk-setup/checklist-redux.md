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
  ```js
  import { configureStore } from '@reduxjs/toolkit';
  import rootReducer from './rootReducer'; // Altere para o seu reducer principal

  const store = configureStore({
    reducer: rootReducer,
  });

  export default store;
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
