import React from "react"
import { useRequestData } from "../../hooks/useRequestData"




export function ListTripsPage() {
 
    const viagens = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')
  
    return (
        <div>
            {viagens.map((viagem) => {
                return <ul> {viagem.name}</ul>
            })
            
            }
        </div>
    )
    
  }

