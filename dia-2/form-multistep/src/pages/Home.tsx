import { useDispatch } from "react-redux"
import Button from "../components/Button"
import Card from "../components/Card"
import { nextStep } from "../redux/slices/stepSlice";

function Home() {
  const dispatch = useDispatch();

  return (
    <Card>
      <h1 style={{ fontSize: '1rem' }}>Formulário Multi-Step</h1>
      <Button type="button" onClick={() => dispatch(nextStep())}>
        Começar
      </Button>
    </Card>
  )
}

export default Home