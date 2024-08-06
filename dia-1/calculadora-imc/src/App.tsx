import React, { useState } from 'react'
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

  return (
    <div className="App__card">
      <h1>Calculadora IMC</h1>
      <form onSubmit={handleSubmit}>
        <Input name="altura" type="number" onChange={handleForm} value={form.altura} />
        <Input name="peso" type="number" onChange={handleForm} value={form.peso} />
        <Button />
        <p>Seu IMC é: {imc.toFixed(2)}</p>
      </form>
    </div>
  )
}

export default App
