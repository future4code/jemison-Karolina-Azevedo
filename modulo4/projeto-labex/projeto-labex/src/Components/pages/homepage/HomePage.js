import React from "react"
import { useNavigate } from "react-router-dom";


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
      <section>
        <h1>Home Page</h1>
        <button onClick={ login }>Login do administrador</button>
        <button onClick={ listaViagens }>Lista de viagens</button>
        <button onClick={inscricaoViagem}>Candidate-se a uma viagem</button>
      </section>
    );
  }
  


export default HomePage