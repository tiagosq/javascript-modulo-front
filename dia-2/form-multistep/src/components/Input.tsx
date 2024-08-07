type IProps = {
  label: string;
  type: 'text' | 'number' | 'email';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, type, value, onChange }: IProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 8 }}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} required />
    </div>
  )
}

export default Input