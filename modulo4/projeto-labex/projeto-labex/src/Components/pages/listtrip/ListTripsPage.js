import React from "react"
import { useRequestData } from "../../hooks/useRequestData"


export function ListTripsPage() {
 
    const [viagens] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips')
//, isLoadingViagens,errorViagens
  const listaDeViagens = viagens && viagens.map((viagem)=>{
    return<p>{viagem.name}</p>
    })


  return (
    <div>
    {/* {isLoadingViagens && <p> Carregando  Viagens</p>}
    
      {!isLoadingViagens&& errorViagens&&<p>Ocorreu um erro com as viagens</p>}
      
      {!isLoadingViagens&&viagens&&viagens.length >0 &&listaDeViagens}
     
      {!isLoadingViagens&&viagens&&viagens.length === 0 &&(<p> Não há viagens</p>)} */}
     <p>{listaDeViagens}</p>

    </div>
  );
    
  }

