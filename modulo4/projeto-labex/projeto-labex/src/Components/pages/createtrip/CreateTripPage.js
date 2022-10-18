import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "../../hooks/useForm";
import { BotaoHome, BotaoPaginaViagens, ContainerCriarViagem, FormCriarViagem } from "./style";
import {useProtectedPage} from "../../hooks/useProtectedPage"

export function CreateTripPage() {

    useProtectedPage()

    const navigate = useNavigate();

    const paginaListaDeViagens = () => {
        navigate("/trips/list")
      }
      const paginaHome = () => {
        navigate("/")
      }
    

    const {form, onChange, clear} = useForm({ name: "", planet: "", date: "", description:"", durationInDays:"" })

    const criarViagem = (event) => {
        event.preventDefault()
        const headers = {
            headers:{
                auth: localStorage.getItem("token")
            }
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips",
            form, headers)
            .then((response) => {alert ("Viagem nova criada com sucesso!") 
            console.log(response.data)})
            .catch((error) => {console.log(error.message)})
            clear()

    }

    return (
        <ContainerCriarViagem>
            <h1> Criar Viagem </h1>
            <FormCriarViagem onSubmit={criarViagem}>
                <label htmlFor="name"> Nome da viagem: </label>
                <input
                    name="name"  
                    placeholder=""
                    value={form.name}
                    onChange={onChange}
                    type="name" 
                    required 
                />
                <label htmlFor="planet"> Planeta: </label>
                <input
                    name="planet"  
                    placeholder=""
                    value={form.planet}
                    onChange={onChange}
                    type="planet" 
                    title="mínimo de 3 caracteres"
                    required
                />
                <label htmlFor="date"> Data: </label>
                <input
                    name="date"  
                    placeholder=""
                    value={form.date}
                    onChange={onChange}
                    type="date" 
                    required 
                />
                <label htmlFor="description"> Descrição: </label>
                <input
                    name="description"  
                    placeholder=""
                    value={form.description}
                    onChange={onChange}
                    type="text" 
                    required 
                />
                <label htmlFor="durationInDays"> Dias de duração: </label>
                <input
                    name="durationInDays"  
                    placeholder=""
                    value={form.durationInDays}
                    onChange={onChange}
                    type="number"
                    required 
                />
                <button type="submit">Enviar </button> 
                
            </FormCriarViagem>
            <BotaoPaginaViagens onClick={ paginaListaDeViagens }>Lista de Viagens</BotaoPaginaViagens>
            <BotaoHome onClick={paginaHome}>Home</BotaoHome>
        </ContainerCriarViagem>

    )
}