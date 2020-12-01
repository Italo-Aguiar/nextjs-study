import { useState } from 'react';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Contador /> 
    </div>
  );
}

const Contador = () => {
  const [ counter, setCounter ] = useState(1);

  const incrCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrCounter}>Adicionar</button>
    </div>
  );
}

export default Home;