import { perfil } from './MockDeDados/DadosProfile';
import { GlobalStyle } from './GlobalStyle';
import {TelaInicial} from './Telas/TelaInicial/TelaInicial'


function App() {


  return (
    <div className="App">
      <GlobalStyle/>
     <TelaInicial perfil={perfil}/>

    </div>
  );
}

export default App;
