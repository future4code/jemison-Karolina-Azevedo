import React from "react"
import { useNavigate } from "react-router-dom";


export function AdminHomePage () {
const navigate = useNavigate();

    const criarViagem = () => {
        navigate("/admin/trips/create")
      }

      const sobreViagens = () => {
        navigate("/admin/trips/:id")
      }

      
    return (
      <section>
        <h1>Administrador</h1>
        <button onClick={criarViagem}>Criar nova viagem</button>
        <button onClick={sobreViagens}>Sobre viagens</button>
        
      </section>
    );
  }
  

