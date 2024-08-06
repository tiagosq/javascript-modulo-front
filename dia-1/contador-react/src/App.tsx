import { useState } from 'react'
import './App.css'
import Highscore from './components/Highscore';
import Counter from './components/Counter';

type IPos = {
  x: number;
  y: number;
};

function App() {
  const [max, setMax] = useState<number>(0);
  const [pos, setPos] = useState<IPos>({ x: 0, y: 0 });

  const handleMouse = (pos: number) => {
    //
  }

  return (
    <>
      <Counter max={max} setMax={setMax} />
      <Highscore number={max} handleMouse={handleMouse} />
    </>
  )
}

export default App
