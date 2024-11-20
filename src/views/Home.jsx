import  { useState } from 'react';
import MyButton from '../components/MyButton';

const Home = () => {
  const [message, setMessage] = useState('Bem-vindo à minha página do TP1!');

  const handleClick = () => {
    setMessage('Botão clicado!');
  };

  return (
    <div>
      <h1>Home do TP</h1>
      <p>{message}</p>
      <MyButton onClick={handleClick} label="Clique!" />
    </div>
  );
};

export default Home;
