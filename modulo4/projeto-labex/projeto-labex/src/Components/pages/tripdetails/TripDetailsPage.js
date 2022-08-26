import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { ContainerDetalhe } from "./style"



export function TripDetailsPage () {
    useProtectedPage()

    const params = useParams()

    const navigate = useNavigate()

    const paginaHome = () => {
        navigate("/")
      }
      const headers = {
        headers: {
            auth: localStorage.getItem("token")
        }
      }

      const [detalhes] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/trip/${params.id}`, headers)

            console.log(detalhes)

      const viagensDetalhes = detalhes && detalhes.trip.candidates.map((detalhe)=>{
        return(
            <div key={detalhe.id}>
        <p>{detalhe.name}</p>
        <p>{detalhe.applicationText}</p>
        <p>{detalhe.age}</p>
        <p>{detalhe.profession}</p>
        <p>{detalhe.country}</p>
        </div>
        )
        })
    console.log(viagensDetalhes)

 
    return (
        <ContainerDetalhe>
            
            {detalhes && detalhes.trip.candidates.length?viagensDetalhes:<p>
                sem candidatos pendentes</p>}
               
            <button onClick={paginaHome}>Home</button> 
        </ContainerDetalhe>
    )
}