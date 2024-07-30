# Checklist - React com Vite
*Atividade criada por Tiago Quadros*

## Objetivo
Teremos aqui um passo a passo para você criar sua aplicação React.

## Pré-requisitos
- [ ] Certifique-se de ter o Node.js instalado na sua máquina. [Baixe aqui](https://nodejs.org/).

# Siga os próximos passos

## Criar um Novo Projeto com Vite
- [ ] Abra seu terminal.
- [ ] Execute o seguinte comando para criar um novo projeto React usando Vite:
  ```sh
  npm create vite@latest nome-do-projeto --template react
  ```
- [ ] Navegue até o diretório do projeto:
  ```sh
  cd nome-do-projeto
  ```
- [ ] Instale as dependências do projeto:
  ```sh
  npm install
  ```

## Executar a Aplicação
- [ ] Inicie o servidor de desenvolvimento:
  ```sh
  npm run dev
  ```
- [ ] Abra o navegador e acesse a URL fornecida (geralmente `http://localhost:5173`).

## Seções Opcionais

### Configurar ESLint
- [ ] Instalar ESLint e plugins recomendados:
  ```sh
  npm install eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import --save-dev
  ```
- [ ] Inicializar a configuração do ESLint:
  ```sh
  npx eslint --init
  ```
  Siga as instruções interativas para configurar o ESLint de acordo com suas preferências.

### Configurar Tailwind CSS
- [ ] Instalar Tailwind CSS:
  ```sh
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- [ ] Configurar o arquivo `tailwind.config.js`:
  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
- [ ] Adicionar diretivas do Tailwind ao seu arquivo CSS:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- [ ] Importar o arquivo CSS no seu componente principal (geralmente `index.js` ou `App.js`):
  ```js
  import './index.css';
  ```

Seguindo esses passos, você terá um aplicativo React criado com Vite e opcionalmente configurado com ESLint e Tailwind CSS.
