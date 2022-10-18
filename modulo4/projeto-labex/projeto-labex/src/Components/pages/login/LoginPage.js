import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "../../hooks/useForm";
import { ContainerLogin, FormLogin, BotaoHome } from "./style";



export function LoginPage() {

    const navigate = useNavigate();
    const paginaHome = () => {
        navigate("/")
      }

    const {form, onChange, clear} = useForm({ email: "", password: "" })


    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karolina-marques-jemison/login",
            form)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            .catch((error) => console.log(error.message))
        })
        clear();
    }

    return (
        <ContainerLogin>
            
            <h1> Login </h1>
            <FormLogin onSubmit={fazerLogin}>
                <input
                    name="email" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" //faz validações de e-mail
                    required //torna campo obrigatório
                />
                <input
                    name="password" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" //oculta senha
                    pattern="^.{3,}$" //padrão Regex
                    title="mínimo de 3 caracteres"
                    required //torna campo obrigatório
                />
                <button type="submit">Enviar </button> 
            </FormLogin>
            <BotaoHome onClick={paginaHome}>Home</BotaoHome>
        </ContainerLogin>
    )
}