import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "../../hooks/useForm";

export function CreateTripPage() {

    const navigate = useNavigate();

    const paginaListaDeViagens = () => {
        navigate("/trips/list")
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
        <div>
            <h1> Criar Viagem </h1>
            <form onSubmit={criarViagem}>
                <label htmlFor="name"> Nome da viagem: </label>
                <input
                    name="name" 
                    id="name" 
                    placeholder="Nome"
                    value={formCriarViagem.name}
                    onChange={onChange}
                    type="name" 
                    required 
                />
                <label htmlFor="planet"> Planeta: </label>
                <input
                    name="planet" 
                    id="Planet" 
                    placeholder="Planeta"
                    value={formCriarViagem.planet}
                    onChange={onChange}
                    type="planet" 
                    title="mínimo de 3 caracteres"
                    required
                />
                <button type="submit">Enviar </button> 
                <button onClick={ paginaListaDeViagens }></button>
            </form>
        </div>

    )
}