type IProps = {
  type: 'submit' | 'button';
  onClick: () => void;
  children: React.ReactNode;
};

function Button({ type, onClick, children }: IProps) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button