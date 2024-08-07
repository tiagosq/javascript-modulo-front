import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setName } from '../redux/slices/formSlice';
import { nextStep } from '../redux/slices/stepSlice';

function Step1() {
  const dispatch = useDispatch();
  const input = useSelector((state: RootState) => state.form.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(nextStep());
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" value={input} onChange={handleChange} />
        <Button 
          type="submit" 
          onClick={() => console.log('clicked')}
        >
          Avançar
        </Button>
      </form>
    </Card>
  )
}

export default Step1