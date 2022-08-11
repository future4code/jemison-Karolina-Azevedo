import React from "react";
import { useRequestData } from "./Components/hooks/useRequestData";
import Router from './Components/routes/Router'


function App() {

  const [viagens, isLoadingViagens,errorViagens] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')

  const listaDeViagens = viagens && viagens.map((viagem)=>{
    return<p>{viagem.name}</p>
    })


  return (
    <div>
    <Router/>
    {isLoadingViagens && <p> Carregando  Viagens</p>}
    
      {!isLoadingViagens&& errorViagens&&<p>Ocorreu um erro com as viagens</p>}
      
      {!isLoadingViagens&&viagens&&viagens.length >0 &&listaDeViagens}
     
      {!isLoadingViagens&&viagens&&viagens.length === 0 &&(<p> Não há usuários</p>)}
     

    </div>
  );
}

export default App;
