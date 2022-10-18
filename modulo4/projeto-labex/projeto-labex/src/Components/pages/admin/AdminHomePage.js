import axios from "axios";
import React from "react"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { ContainerAdm, ListaDeViagens } from "./style";


export function AdminHomePage () {
    useProtectedPage()

    const navigate = useNavigate();

    const paginaHome = () => {
      navigate("/")
    }
   
    const criarViagem = () => {
        navigate("/admin/trips/create")
      }
      const sobreViagens = (id) => {
        navigate(`/admin/trips/${id}`)
      }

      // useEffect(() => {
        
      // }, [listaDeViagens])

      const [viagens, isLoadingViagens, errorViagens] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips')

      const listaDeViagens = viagens && viagens.trips.map((viagem)=>{
        return(
        <div key={viagem.id}>
          <div onClick={() => sobreViagens(viagem.id) }>
          <span>
            {viagem.name}
          </span>
          <button onClick={() => deleteTrip(viagem.id)}>Deletar Viagem</button>
          </div>
          
          </div>
      )})

      const deleteTrip = (id) => {
        const headers = {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
        alert("Tem certeza que deseja deletar essa viagem?")

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips/${id}`, headers)
        .then((response) => {
          alert("Viagem deletada com sucesso.")
          (response.data)
        }).catch((error) => {
          (console.log(error))
        })


      }
        

      
    return (
      <ContainerAdm>
        <h1>Administrador</h1>
        <ListaDeViagens>
        {isLoadingViagens && <p> Carregando  Viagens</p>}    
        {!isLoadingViagens&& errorViagens&&<p>Ocorreu um erro com as viagens</p>}    
        {!isLoadingViagens&&viagens&&viagens.trips.length >0 &&listaDeViagens}   
        {!isLoadingViagens&&viagens&&viagens.trips.length === 0 &&(<p> Não há viagens</p>)}
        </ListaDeViagens>
        <button onClick={paginaHome}>Home</button>  
        <button onClick={criarViagem}>Criar nova viagem</button>      
      </ContainerAdm>
    );
  }
  

