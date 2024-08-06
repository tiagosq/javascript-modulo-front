import React, { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button';

function App() {
  //O estado deve conter todos os campos do formulário
  // Para utilizar apenas uma função de change para todos.
  const [form, setForm] = useState({ altura: '', peso: '' });
  const [imc, setImc] = useState(0);

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    // É change genérico.
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const alturaConvertida = parseInt(form.altura) / 100;
    setImc(parseInt(form.peso) / (alturaConvertida ** 2));
  }

  const btnDisabled = parseInt(form.altura) > 0 && parseInt(form.peso) > 0;
  // NaN = Not a Number

  // É um efeito colateral de uma renderização.
  // Momentos de um componentes: Nascer, Atualizar, Atualizar Condicionado, Morrer.
  // Nascer - Montagem
  useEffect(() => {
    console.log('Componente foi montado');
    document.title = 'Bem-vindo ao IMC Master Calculator Premium Plus';

    //Morte - Destruição - Desmontagem
    // Clean-up function - "React useEffect cleanup function"
    return () => {
      alert('O componente foi destruído.');
    }
  }, []);

  // Atualização - Cuidado com o loop infinito.
  useEffect(() => {
    console.log('Componente foi atualizado');
  });
  
  // Atualização condicionada - Reparem no array de dependência
  useEffect(() => {
    console.log('O IMC foi calculado.');
    document.title = `Seu IMC é de ${imc}`;
  }, [imc]);

  return (
    <div className="App__card">
      <h1>Calculadora IMC</h1>
      <form onSubmit={handleSubmit}>
        <Input name="altura" type="number" onChange={handleForm} value={form.altura} />
        <Input name="peso" type="number" onChange={handleForm} value={form.peso} />
        {btnDisabled && <Button isDisabled={btnDisabled} />}
        <p>Seu IMC é: {imc.toFixed(2)}</p>
        <p>{btnDisabled.toString()}</p>
      </form>
    </div>
  )
}

export default App
