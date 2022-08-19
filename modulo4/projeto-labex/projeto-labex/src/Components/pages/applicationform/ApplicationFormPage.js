import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "../../hooks/useForm";
import { ContainerCandidato, FormInscricao } from "./style";

export function ApplicationFormPage() {

    const navigate = useNavigate();

    const paginaListaDeViagens = () => {
        navigate("/trips/list")
      }

    const [formCandidatoViagem, onChange] = useForm({ 
    name: "",
    age: Number,
    applicationText: "",
    profession: "",
    country: ""
})

    const candidatoViagem = (event) => {
        event.preventDefault()

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips/:id/apply",
            formCandidatoViagem)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error.message))

    }

    return (
        <ContainerCandidato>
            <h1> Inscrição para viajar no espaço </h1>
            <FormInscricao onSubmit={candidatoViagem}>
                <label htmlFor="name"> Nome: </label>
                <input
                    name="name" 
                    id="name" 
                    placeholder=""
                    value={formCandidatoViagem.name}
                    onChange={onChange}
                    type="name" 
                    required 
                />
                <label htmlFor="age"> Idade: </label>
                <input
                    name="age" 
                    id="age" 
                    placeholder=""
                    value={formCandidatoViagem.planet}
                    onChange={onChange}
                    type="number"
                    required
                />
                <label htmlFor="applicationText"> Por que você deve ser escolhido para uma viagem ao espaço: </label>
                <input
                    name="applicationText" 
                    id="applicationText" 
                    placeholder=""
                    value={formCandidatoViagem.applicationText}
                    onChange={onChange}
                    type="text" 
                    required 
                />
                <label htmlFor="profession"> Profissão: </label>
                <input
                    name="profession" 
                    id="profession" 
                    placeholder=""
                    value={formCandidatoViagem.profession}
                    onChange={onChange}
                    type="text"
                    required
                />
                <label htmlFor="country"> Nacionalidade: </label>
                <input
                    name="country" 
                    id="country" 
                    placeholder=""
                    value={formCandidatoViagem.country}
                    onChange={onChange}
                    type="text"
                    required
                />
                <button type="submit">Enviar </button> 
                <button onClick={paginaListaDeViagens}></button>
            </FormInscricao>
        </ContainerCandidato>

    )
}