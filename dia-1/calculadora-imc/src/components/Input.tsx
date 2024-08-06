import './input.css';

type IProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'checkbox' | 'number';
  value: string;
  name: string;
}

function Input({ name, type, value, onChange }: IProps) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="form-input"
      required
    />
  )
}

export default Input