import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "../../hooks/useForm";



export function LoginPage() {
    const navigate = useNavigate();

    const paginaAdm = () => {
        navigate("/admin/trips/list")
      }

    const [formLogin, onChange, clear] = useForm({ email: "", password: "" })


    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/login",
            formLogin)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error.message))

        clear();

    }

    return (
        <div>
            <h1> Login do administrador </h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="email" //colocar igual ao htmlFor do label
                    placeholder="E-mail"
                    value={formLogin.email}
                    onChange={onChange}
                    type="email" //faz validações de e-mail
                    required //torna campo obrigatório
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="senha" //colocar igual ao htmlFor do label
                    placeholder="Senha"
                    value={formLogin.password}
                    onChange={onChange}
                    type="password" //oculta senha
                    pattern="^.{3,}$" //padrão Regex
                    title="mínimo de 3 caracteres"
                    required //torna campo obrigatório
                />

                <button type="submit" onClick={ paginaAdm }>Enviar </button> 
            </form>
        </div>

    )
}