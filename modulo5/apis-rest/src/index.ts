import { users } from "./data"

import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

/*exercício 1
a- get
b- "/users"*/


//exercício 2
enum Tipos {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
  }

type User = {
    id: number,
    name: string,
    email: string,
    type: Tipos,
    age: number
}

//exercício 3

//exercício 4

app. post("/users", (req: Request, res: Response)=>{
    try{
        const{name, email, age} = req.body
        let type = req.body.type as string

        if(!name || !email || !age || !type){
            throw new Error("Dados ausentes para criar usuário");
        }

        if (typeof name !== "string"){
            throw new Error("Nome inválido");
        }
        if (typeof email !== "string"){
            throw new Error("Email inválido");
        }
        if (typeof age !== "number"){
            throw new Error("Idade inválida");
        }
        type = type.toUpperCase()
        if(!(type in Tipos)){
            throw new Error("Tipo inválido");
        }

        const novoUsuario: User = {
            id: users.length +1,
            name,
            email,
            age,
            type: type === Tipos.NORMAL
            ? Tipos.NORMAL
            : Tipos.ADMIN
        }

        users.push (novoUsuario)

        res.status(200).send(users)

    } catch (error: any){
        res.status(400).send(error.message)
    }

})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});