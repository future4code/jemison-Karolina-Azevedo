import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "../../hooks/useForm";
import { ContainerCandidato, FormInscricao } from "./style";
import { useRequestData } from "../../hooks/useRequestData";

export function ApplicationFormPage() {

    const [inputTrip, setInputTrip] = useState("")
    const update = (e) => {
        setInputTrip(e.target.value)
    }

    const navigate = useNavigate();

    const paginaHome = () => {
        navigate("/")
      }

    const {form, onChange, clear} = useForm({ 
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
})

    const candidatoViagem = (event) => {
        event.preventDefault()

        const body = {
            ...form
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips/${inputTrip}/apply`,
            body)
            .then((response) => {alert("Cadastro feito com sucesso!")
            console.log(response.data)})
            .catch((error) => {console.log(error.message)})

     clear()

    }

    const [trips] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trips")
    const tripList = trips&&trips.trips.map((item) => {
        return (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        )
    })

    return (
        <ContainerCandidato>
            <h1> Inscrição para viajar no espaço </h1>
            <FormInscricao onSubmit={candidatoViagem}>
                <select value={inputTrip} onChange={update}>
                    <option>Selecione uma viagem</option>
                    {tripList}
                </select>
                <label htmlFor="name"> Nome: </label>
                <input
                    name="name" 
                   
                    placeholder=""
                    value={form.name}
                    onChange={onChange}
                    type="name" 
                    required 
                />
                <label htmlFor="age"> Idade: </label>
                <input
                    name="age"                  
                    placeholder=""
                    value={form.planet}
                    onChange={onChange}
                    type="number"
                    required
                />
                <label htmlFor="applicationText"> Por que você deve ser escolhido para uma viagem ao espaço: </label>
                <input
                    name="applicationText"                      
                    placeholder=""
                    value={form.applicationText}
                    onChange={onChange}
                    type="text" 
                    required 
                />
                <label htmlFor="profession"> Profissão: </label>
                <input
                    name="profession"                 
                    placeholder=""
                    value={form.profession}
                    onChange={onChange}
                    type="text"
                    required
                />
                <label htmlFor="country"> Nacionalidade: </label>
                <input
                    name="country"                     
                    placeholder=""
                    value={form.country}
                    onChange={onChange}
                    type="text"
                    required
                />
                <button type="submit">Enviar </button> 
            </FormInscricao>
            <button onClick={paginaHome}>Home</button>  
        </ContainerCandidato>

    )
}