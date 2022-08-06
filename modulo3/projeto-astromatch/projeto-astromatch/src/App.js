
import { useState } from 'react';
import {TelaInicial} from './Components/TelaInicial/TelaInicial'
import { TelaMatches } from './Components/TelaMatches/TelaMatches';


function App(props) {

  const [tela, setTela] = useState ("inicial")

  const trocaDeTela = (tela) => {
    setTela(tela)
  }

  const renderizaTela = () => {
    switch (tela){
      case "inicial": 
      return <TelaInicial trocaDeTela={trocaDeTela}/>
      case "matches":
        return <TelaMatches trocaDeTela={trocaDeTela}/>

      default:
        return null;
    }
  }

  return (
    <div>
    
     {renderizaTela()}

    </div>
  );
}

export default App;
