import { useState } from "react";
import axios from "axios";

const TelaInicial = () => {

const [nome, setNome] = useState ("")
const [email, setEmail] = useState ("")

const handleInputNome = (e) => {
    setNome(e.target.value)
}

const handleInputEmail = (e) => {
    setEmail(e.target.value)
}



const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const serviceHeaders = {
    headers: {
        Authorization: 'karolina-marques-jemison'
    }
}
const body = {
    "name": nome,
    "email": email

}

const adicionarUsuario = (e) => {
    e.preventDefault();

    axios.post(url, body, serviceHeaders)
    .then((response) => {
        alert("Usuário incluído com sucesso!")
    }).catch((error) => {
        alert("Tente novamente :(")
    })

    setNome("")
    setEmail("")
}


return (
    <div>
        <h3>Cadastro de usuário</h3>
        <form>
            <label>Insira seu nome:</label>
            <input type="text" id= "name" value={nome} onChange={handleInputNome}/>
            <label>Insira seu e-mail:</label>
            <input type="text" id= "email" value={email} onChange={handleInputEmail}/>
            <button onClick={adicionarUsuario}> Adicionar </button>
        </form>
    </div>
)}

export default TelaInicial