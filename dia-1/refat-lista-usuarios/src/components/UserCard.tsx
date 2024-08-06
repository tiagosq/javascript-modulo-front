type IProps = {
  name: string;
  email: string;
  onClick?: () => void;
}

function UserCard({ name, email, onClick }: IProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      {onClick && <button onClick={onClick}>Selecionar</button>}
    </div>
  )
}

export default UserCard;
