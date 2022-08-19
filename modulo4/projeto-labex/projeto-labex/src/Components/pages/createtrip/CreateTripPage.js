import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "../../hooks/useForm";
import { BotaoHome, BotaoPaginaViagens, ContainerCriarViagem, FormCriarViagem } from "./style";

export function CreateTripPage() {

    const navigate = useNavigate();

    const paginaListaDeViagens = () => {
        navigate("/trips/list")
      }
      const paginaHome = () => {
        navigate("/")
      }
    

    const [formCriarViagem, onChange, clear] = useForm({ name: "", planet: "", date: "", description:"", durationInDays: Number })

    const criarViagem = (event) => {
        event.preventDefault()

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips",
            formCriarViagem)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error.message))

            clear()

    }

    return (
        <ContainerCriarViagem>
            <h1> Criar Viagem </h1>
            <FormCriarViagem onSubmit={criarViagem}>
                <label htmlFor="name"> Nome da viagem: </label>
                <input
                    name="name" 
                    id="name" 
                    placeholder=""
                    value={formCriarViagem.name}
                    onChange={onChange}
                    type="name" 
                    required 
                />
                <label htmlFor="planet"> Planeta: </label>
                <input
                    name="planet" 
                    id="Planet" 
                    placeholder=""
                    value={formCriarViagem.planet}
                    onChange={onChange}
                    type="planet" 
                    title="mínimo de 3 caracteres"
                    required
                />
                <label htmlFor="date"> Data: </label>
                <input
                    name="date" 
                    id="date" 
                    placeholder=""
                    value={formCriarViagem.date}
                    onChange={onChange}
                    type="date" 
                    required 
                />
                <label htmlFor="description"> Descrição: </label>
                <input
                    name="description" 
                    id="description" 
                    placeholder=""
                    value={formCriarViagem.description}
                    onChange={onChange}
                    type="text" 
                    required 
                />
                <label htmlFor="durationInDays"> Dias de duração: </label>
                <input
                    name="durationInDays" 
                    id="durationInDays" 
                    placeholder=""
                    value={formCriarViagem.durationInDays}
                    onChange={onChange}
                    type="number"
                    required 
                />
                <button type="submit">Enviar </button> 
                <BotaoPaginaViagens onClick={ paginaListaDeViagens }>Lista de Viagens</BotaoPaginaViagens>
                <BotaoHome onClick={paginaHome}>Home</BotaoHome>
            </FormCriarViagem>
        </ContainerCriarViagem>

    )
}