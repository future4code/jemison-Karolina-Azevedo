import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
const informacoes = [

{nomeUsuario: 'Paulinha',
fotoUsuario: 'https://picsum.photos/50/50',
fotoPost: 'https://picsum.photos/200/150'},

{nomeUsuario: 'João',
fotoUsuario: 'https://picsum.photos/50/60',
fotoPost: 'https://picsum.photos/200/140'},

{nomeUsuario: 'Maria',
fotoUsuario: 'https://picsum.photos/50/70',
fotoPost: 'https://picsum.photos/200/130'}
]

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
          {informacoesPost}
        </MainContainer>
)

}


export default App;
