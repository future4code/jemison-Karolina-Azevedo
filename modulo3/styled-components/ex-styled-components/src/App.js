
import React from 'react';
import './App.css';
import logoLabenu from './img/logoLabenu.jpg';
import {Container} from './styled';
import {Header} from './styled';
import {Main} from './styled';
import {Footer} from './styled';


function App() {
  return (
    <Container>

      <Header>
        <img src={ logoLabenu } alt={"logo Labenu"} />
        <h1>LabZap</h1>
      </Header>

      <Main>
        <section></section>

        <div>
         Remetente: <input  type="text" name="input"/>
         Msg: <input className='inputModificado' type="text" name="input" />
        <button type="button">Enviar Mensagem</button>
        </div>

        <section></section>
      </Main>

      <Footer>
        <p>Copyright  © 2022 Labenu All rigths reserved. R. Pais leme, 215, Conjunto 820 Pinheiros. Cep 05424-150</p>
      </Footer>
    </Container>

  );
}

export default App;
