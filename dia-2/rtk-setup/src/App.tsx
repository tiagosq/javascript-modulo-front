import { useSelector } from 'react-redux';
import './App.css'
import Button from './components/Button'
import { RootState } from './redux/store';

function App() {
  const theme = useSelector((state: RootState) => state.theme.colorScheme);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? 'black' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
    }}>
      <Button />
    </div>
  )
}

export default App
