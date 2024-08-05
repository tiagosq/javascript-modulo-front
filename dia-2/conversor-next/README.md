# Conversor de Moedas
*Atividade criada por Tiago Quadros*

## Objetivo
Desenvolver uma aplicação web utilizando Next.js que mostre a taxa de câmbio usando a API do AwesomeAPI.

## Habilidades Esperadas
- Assimilar os conceitos do Next.js
- Entender a diferença das rotas em relação ao React.
- Entender o uso de SSR.

## Como entregar a atividade?
As atividade devem ser enviadas em um arquivo zip, apenas com os seus códigos (as dependências podem ser reinstaladas apenas com o `package.json`).

[FORMULÁRIO PARA ENVIO](https://forms.gle/iJKx4yrXPouE5KpU8)

## Requisitos

### 1 - Crie a estrutura inicial
Instale o Next.js e crie um novo projeto.

### 2 - Crie a função de fetch de dados das cotações
A requisição para a nossa API `https://economia.awesomeapi.com.br` deve ser realizada em um arquivo `api.ts` dentro de uma pasta chamada `lib`.

### 3 - Crie uma função para obter as moedas disponíveis
A requisição para a nossa API `https://economia.awesomeapi.com.br` deve ser realizada em um arquivo `api.ts` dentro de uma pasta chamada `lib`.

### 4 - Crie a página de exibição
Edite pages/index.js para buscar e exibir as taxas de câmbio

### 5 - Crie a função para atualizar os valores conforme as moedas selecionadas.
Aqui você deve garantir que nenhum outro contador tenha sido iniciado para evitar a duplicidade na contagem do tempo (2 segundos a cada segundo).

### 6 - [BÔNUS] Crie uma página sobre o projeto
Aqui desejamos apenas testar nosso conhecimento sobre o Router do Next.js.

### 7 - [BÔNUS] Crie uma página 404 para rotas inválidas.
Mesmo objetivo do requisito 6.