import { useEffect } from "react";

type IProps = {
  isDisabled: boolean;
};

function Button({ isDisabled }: IProps) {
  // useEffect(() => {
  //   //Monta
  //   const timer = setInterval(() => console.log('Contador'), 1000);

  //   //Desmontagem
  //   return () => {
  //     clearInterval(timer);
  //     alert('Button Componente desmontado');
  //   }
  // });

  return (
    <button
      type="submit"
      style={{
        backgroundColor: 'navy',
        color: 'white',
        fontSize: '1.5rem',
        border: 'none',
        padding: '10px 20px',
        borderRadius: 4,
        width: '100%',
      }}
      disabled={!isDisabled}
    >
      Calcular
    </button>
  )
}

export default Button