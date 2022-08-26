import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { ContainerDetalhe } from "./style"



export function TripDetailsPage () {
    useProtectedPage()

    useParams()

    const navigate = useNavigate()

    const paginaHome = () => {
        navigate("/")
      }


      const [detalhes] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id')

      const viagensDetalhes = detalhes && detalhes.trips.map((detalhe)=>{
        return<p>{detalhe.name}</p>
        })
    

 
    return (
        <ContainerDetalhe>
            <p>TripDetailsPage</p>
            {viagensDetalhes}
            <button onClick={paginaHome}>Home</button> 
        </ContainerDetalhe>
    )
}