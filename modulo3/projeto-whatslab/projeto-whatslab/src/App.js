
import React, {useState} from 'react';
import Imagem from "./img/logoLabenu.png";
import {Pai, AreaLaranja, Cabecalho, AreaMensagem, Rodape} from "./style"; 

function App() {

  const [inputNome, setInputNome] = useState("")
  const [inputMensagem, setInputMensagem] = useState("")
  const [mensagem, setMensagem] = useState([])

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  }

  const addMensagem = (e) => {
    e.preventDefault();
  
    const novaMensagem = {usuario: inputNome, mensagem: inputMensagem}
    const novaMensagemEnviada = [...mensagem, novaMensagem]
    setMensagem(novaMensagemEnviada)
    setInputNome("")
    setInputMensagem("")
  }
  
const listaDeMensagens = mensagem.map((msg, index) =>{
  return (
    <div key={index}
     usuario= {msg.usuario}
      mensagem= {msg.mensagem}
    />
  )
}) 

  return (
    <Pai>
      <Cabecalho><img src={Imagem} alt="Labenu"/><h1>LabZap</h1></Cabecalho>
      <AreaLaranja/>
        <AreaMensagem>
        {listaDeMensagens}
          <form>
            <label/>
            <input 
            placeholder='Usuário'
          value={inputNome}
          onChange={handleInputNome}/>
            <label/>
            <input 
            placeholder='Mensagem'
            value={inputMensagem}
            onChange={handleInputMensagem}/>
            <button onClick={addMensagem}>Enviar</button>
          </form>
        </AreaMensagem>
      <AreaLaranja/>
      <Rodape>Copyright © 2022 Labenu All rights reserved. R. Labenu, 1000. Rio de Janeiro. CEP 00.111-000 </Rodape>
    </Pai>
  );
}

export default App;
