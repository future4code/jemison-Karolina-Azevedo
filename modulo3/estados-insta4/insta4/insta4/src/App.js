import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column
  justify-content: center;
  align-items: center;
  
    label {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
  
    input {
      padding: 10px 5px;
      border: 1px solid black;
      border-radius: 10px;
      margin: 10px;
      width: 20%;
    }
  
    button {
      border: none;
      border-radius: 10px;
      padding: 10px;
      background-color: greenyellow;
    }
  
    button:hover {
      cursor: pointer;
      color: white;
    }
  `

function App() {

const [inputNome, setInputNome] = useState("")
const [inputFoto, setInputFoto] = useState("")
const [inputPostagem, setInputPostagem] = useState("")

const [informacoes, setInformacoes] = useState ([

{nomeUsuario: 'Paulinha',
fotoUsuario: 'https://picsum.photos/50/50',
fotoPost: 'https://picsum.photos/200/150'},

{nomeUsuario: 'João',
fotoUsuario: 'https://picsum.photos/50/60',
fotoPost: 'https://picsum.photos/200/140'},

{nomeUsuario: 'Maria',
fotoUsuario: 'https://picsum.photos/50/70',
fotoPost: 'https://picsum.photos/200/130'}
])

const handleInputNome = (e) => {
  setInputNome(e.target.value)
}
const handleInputFoto = (e) => {
  setInputFoto(e.target.value)
}
const handleInputPostagem = (e) => {
  setInputPostagem(e.target.value)
}
const addPostagem = (e) => {
  e.preventDefault();

  const novoPost = {nomeUsuario: inputNome, fotoUsuario: inputFoto, fotoPost: inputPostagem}
  const novaListaDePost = [...informacoes, novoPost]
  setInformacoes(novaListaDePost)
  setInputNome("")
  setInputFoto("")
  setInputPostagem("")
}


const informacoesPost = informacoes.map((pessoa, index) =>{
  return (
    <Post key={index}
     nomeUsuario= {pessoa.nomeUsuario}
      fotoUsuario= {pessoa.fotoUsuario}
      fotoPost= {pessoa.fotoPost}
    />
  )
})
console.log(informacoesPost)

return(
  <MainContainer>
    <Form>
        <label>Nome:</label>
        <input
          placeholder='Insira seu nome'
          value={inputNome}
          onChange={handleInputNome}
        />
        
        <label>Foto:</label>
        <input
          placeholder='Insira uma foto'
          value={inputFoto}
          onChange={handleInputFoto}
        />
        <label>Mensagem:</label>
        <input
          placeholder='Insira uma postagem'
          value={inputPostagem}
          onChange={handleInputPostagem}
        />
        <button onClick={addPostagem}>Adicionar</button>
      </Form>
          {informacoesPost}
        </MainContainer>
)

}


export default App;
