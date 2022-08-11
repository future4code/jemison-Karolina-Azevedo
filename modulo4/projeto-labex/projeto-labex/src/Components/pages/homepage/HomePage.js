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
  
    return (
      <section>
        <h1>Home Page</h1>
        <button onClick={ login }>Login</button>
        <button onClick={ listaViagens }>Lista de viagens</button>
      </section>
    );
  }
  


export default HomePage