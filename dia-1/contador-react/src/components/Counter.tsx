import { useState } from 'react'

type IProps = {
  max: number;
  setMax: (value: number) => void;
}

function Counter({ max, setMax }: IProps) {
  const [number, setNumber] = useState(0);

  const sum = () => {
    setNumber(number + 1);
    if((number + 1) > max) {
      setMax(number + 1);
    }
  }

  const minus = () => {
    setNumber(number - 1);
  }

  const reset = () => {
    setNumber(0);
  }

  console.log('Atualizou o contador');
  return (
    <>
      <h1 onClick={sum}>{number}</h1>
      <button onClick={sum}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={minus}>-</button>
    </>
  )
}

export default Counter