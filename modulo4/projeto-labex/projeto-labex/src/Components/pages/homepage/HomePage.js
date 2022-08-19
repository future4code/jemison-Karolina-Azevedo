import React from "react"
import { useNavigate } from "react-router-dom";
import { ContainerHome, Botoes } from "./style";


function HomePage() {
  
    
    const navigate = useNavigate();
    const login = () => {
        navigate("/login")
      }
  
    const listaViagens = () => {
      navigate("/trips/list")
    }

    const inscricaoViagem = () => {
      navigate("/trips/application")
    }
  
    return (
      <ContainerHome>
        <div>
        <h1>Home Page</h1>
        </div>
        <div>
        <button onClick={ login }>Login</button>
        <button onClick={ listaViagens }>Lista de viagens</button>
        <button onClick={inscricaoViagem}>Candidate-se a uma viagem</button>
        </div>
      </ContainerHome>
    );
  }
  


export default HomePage