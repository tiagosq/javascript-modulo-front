import { useState } from "react";
import Title from "./components/Title";
import UserCard from "./components/UserCard";

type IPessoa = {
  nome: string;
  email: string;
}

function App() {
  const grupo = [
    { nome: 'Tiago', email: 'tiago.sq@hotmail.com.br', selecionada: false },
    { nome: 'Coopavel', email: 'contato@coopavel.com.br', selecionada: false },
    { nome: 'TICoop', email: 'contato@ticoop.com.br', selecionada: false },
    { nome: 'Curso', email: 'curso@gmail.com', selecionada: false },
    { nome: 'Contato', email: 'contato@tiagoquadros.com.br', selecionada: false },
  ];

  const [pessoas, setPessoas] = useState<IPessoa[]>(grupo);
  const [selecionada, setSelecionada] = useState<IPessoa>({} as IPessoa);

  const handleClick = (pessoa: IPessoa) => {
    setSelecionada(pessoa);
    const newPessoas = pessoas
      .map((item) => item.email === pessoa.email ? { ...item, selecionada: true } : { ...item, selecionada: false });
    setPessoas(newPessoas);
  }

  return (
    <>
      <Title name="Pessoa selecionada" />
      <UserCard name={selecionada.nome} email={selecionada.email} />
      <Title name="Lista de Usuários" />
      {pessoas.map((pessoa, index) => (
        <UserCard 
          key={index}
          name={pessoa.nome}
          email={pessoa.email}
          onClick={() => handleClick(pessoa)}
        />
      ))}
    </>
  )
}

export default App;
