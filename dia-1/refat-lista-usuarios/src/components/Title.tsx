type IProps = {
  name: string;
}

function Title({ name }: IProps) {
  return (
    <h1>{ name }</h1>
  )
}

export default Title;
