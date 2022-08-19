import axios from "axios";
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerAdm } from "./style";


export function AdminHomePage () {
    useProtectedPage()

    const navigate = useNavigate();

    const paginaHome = () => {
      navigate("/")
    }
    const paginaListaDeViagens = () => {
      navigate("/trips/list")
    }
    const criarViagem = () => {
        navigate("/admin/trips/create")
      }
      const sobreViagens = () => {
        navigate("/admin/trips/:id")
      }

      useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips",
        { headers: {
          auth: token
        }
        }).then((response) => {
          console.log(response.data)
        }).catch((error) => {
          console.log("Deu erro", error.response)
        })
      }, [])

      
    return (
      <ContainerAdm>
        <h1>Administrador</h1>        
        <button onClick={paginaHome}>Home</button>
        <button onClick={paginaListaDeViagens}>Lista de viagens</button>
        <button onClick={criarViagem}>Criar nova viagem</button>
        <button onClick={sobreViagens}>Sobre viagens</button>        
      </ContainerAdm>
    );
  }
  

