import Card from '../components/Card'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { goToStep } from '../redux/slices/stepSlice';

function Step1() {
  const dispatch = useDispatch();
  const { name, age, email } = useSelector((state: RootState) => state.form);

  return (
    <Card>
        <p>
          <strong>Nome:</strong> {name}
        </p>
        <p>
          <strong>Idade:</strong> {age}
        </p>
        <p>
          <strong>E-mail:</strong> {email}
        </p>
        <Button 
          type="submit" 
          onClick={() => dispatch(goToStep(0))}
        >
          Reiniciar
        </Button>
    </Card>
  )
}

export default Step1