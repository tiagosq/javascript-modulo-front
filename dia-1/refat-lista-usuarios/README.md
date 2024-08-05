# Lista de Usuários (Refatoração)
*Atividade criada por Tiago Quadros*

## Objetivo
Iremos refatorar a lista estática de usuários para incluir renderização dinâmica utilizando map, e adicionar um evento para selecionar um card de usuário e destacá-lo.

## Habilidades Esperadas
- Renderizar listas dinamicamente
- Manipular estados
- Gerenciar eventos

## Como entregar a atividade?
As atividade devem ser enviadas em um arquivo zip, apenas com os seus códigos (as dependências podem ser reinstaladas apenas com o `package.json`).

[FORMULÁRIO PARA ENVIO](https://forms.gle/iJKx4yrXPouE5KpU8)

## Requisitos

### 1 - Refatorar o componente principal (App)
Utilize o método map para renderizar a lista de usuários de forma dinâmica.

### 2 - Adicionar estado para armazenar a lista de cards
Adicione um estado no componente App para armazenar o array de usuários.

### 3 - Adicionar estado para seleção de card
Adicione um estado no componente App para armazenar o índice ou identificador do card de usuário selecionado.

### 4 - Adicionar evento de seleção
Adicione um evento de clique no componente UserCard que altere o estado de seleção no componente App.
Destaque o card selecionado visualmente, alterando seu estilo.

### 5 - [BÔNUS] Adicione uma opção para deletar usuários
Crie uma opção para remover qualquer usuário da lista e ela ser atualizada imediatamente na tela.