import Title from "./components/Title";

function App() {
  // Em componentes, eu sempre retorno somente HTML.
  const times = [
    'São Paulo',
    'Grêmio',
    'Sport',
    'Athletico-PR',
    'Paraná',
    'Fluminense',
    'Advogados do Fluminense'
  ];

  return (
    //O fragmento serve para criar um elemento pai, que não irá aparecer no DOM.
    <>
      {times
      .filter((time) => time.length > 0)
      .sort()
      .map((time, index) => 
        <Title key={index} name={time} color={index % 2 === 0 ? 'green' : 'red'} />
      )}
    </>
  )
}

export default App;