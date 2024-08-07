import { useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux/store';
import Home from './pages/Home';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Result from './pages/Result';

function App() {
  const step = useSelector((state: RootState) => state.step.step);
  const token = import.meta.env.VITE_API_BASE_URL;
  console.log(token);

  return (
    <>
      <p>Token {token}</p>
      {step === 0 && <Home />}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Result />}
    </>
  )
}

export default App;
