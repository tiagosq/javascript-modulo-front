type IProps = {
  name: string;
  color?: 'red' | 'green';
};

// Props são entregues para os componentes como um uníco objeto.
// Desestruturação para acessar os nomes de forma direta.
function Title({ name, color = 'green' }: IProps) {
  return (
    <h1 style={{ color }}>{ name }</h1>
  )
}

export default Title;