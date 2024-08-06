type IProps = {
  number: number;
  handleMouse: (event: React.MouseEvent<HTMLElement>) => void;
}

function Highscore({ number = 0, handleMouse }: IProps) {
  console.log('Highscore');
  return (
    <p
      onClick={handleMouse}
    >Máximo: {number}</p>
  )
}

export default Highscore;