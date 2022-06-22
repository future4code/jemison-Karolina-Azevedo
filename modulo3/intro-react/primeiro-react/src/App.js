import perfil from './fotoPerfil.jpg';
import './App.css';

function App() {
  const apertaBotao = () => {
    alert (`Obrigada e tenha uma boa noite!`)
  }
  return (
      <header className="App-header">
        <h1>Seja bem vindo(a), meu nome é Karolina Marques.</h1>
        <img src={perfil} className="minhaFoto" alt="Foto perfil" />
        <p>
          Sou aluna da Labenu e este é meu primeiro projeto React!
        </p>
       <button onClick = {apertaBotao}>Se você torce por mim nesse mundo dev, clique aqui.</button>
      </header>
  );
}

export default App;
