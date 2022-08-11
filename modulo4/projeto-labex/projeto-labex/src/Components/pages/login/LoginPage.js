import React from "react"
import { useNavigate } from "react-router-dom";


export function LoginPage () {

    const navigate = useNavigate();

    const paginaAdm = () => {
        navigate("/admin/trips/list")
      }

    return (
        <div>
            <p>Login</p>
            <button onClick={ paginaAdm }>Administrar viagens</button>
        </div>
        
    )
}