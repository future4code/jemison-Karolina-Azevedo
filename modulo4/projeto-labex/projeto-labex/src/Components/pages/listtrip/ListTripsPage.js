import React from "react"
import { useRequestData } from "../../hooks/useRequestData"
import { ContainerListaViagens } from "./style"



export function ListTripsPage() {
 
    const [viagens, isLoadingViagens,errorViagens] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips')

  const listaDeViagens = viagens && viagens.trips.map((viagem)=>{
    return<p>{viagem.name}</p>
    })


  return (
    <ContainerListaViagens>
      <h1>Lista de Viagens</h1>
      {listaDeViagens}
    {isLoadingViagens && <p> Carregando  Viagens</p>}
    
      {!isLoadingViagens&& errorViagens&&<p>Ocorreu um erro com as viagens</p>}
      
      {!isLoadingViagens&&viagens&&viagens.length >0 &&listaDeViagens}
     
      {!isLoadingViagens&&viagens&&viagens.length === 0 &&(<p> Não há viagens</p>)}
    

    </ContainerListaViagens>
  );
    
  }

