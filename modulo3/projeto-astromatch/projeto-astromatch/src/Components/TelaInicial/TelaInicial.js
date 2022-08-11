import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCard, ContainerImage, ContainerBotao } from "./style";
//import { TelaInicialContainer } from './style'
//import { Header } from '../../Components/Header/Header'


export function TelaInicial (props) {
    const [pessoas,setPessoas] = useState({});

    
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person';
    

    const getProfileToChoose = () => {
        axios.get(url)
        .then((response) => setPessoas(response.data.profile))
        .catch((error) => console.log(error.response))
    }
    useEffect(() => {
        getProfileToChoose()
    }, [])
    

    
    const postChoosePerson = (choice) => {
        const body = {
            id: pessoas.id,
            choice: choice
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body)
        .then((response) => {getProfileToChoose()
        })
        .catch((error) => console.log(error.response))
    }
    const like = () => {
        postChoosePerson(true)
        alert("Adicionado com sucesso")
    }

    const naoLike = () => {
        postChoosePerson(false)
    }
   
    return (
        <ContainerCard key={pessoas.id}>
           <h1>Astro Match</h1>
           <ContainerImage src={pessoas.photo}/>
           <p> {pessoas.name}, {pessoas.age} </p>
           <p>{pessoas.bio}</p>
           <ContainerBotao>
           <button onClick={like}>Curti</button>
           <button onClick={naoLike}>Não curti</button>
            <button onClick={() => {
                props.trocaDeTela("matches")
            }}>Tela de Matches</button>
            </ContainerBotao>
        </ContainerCard>
       
    )
}

