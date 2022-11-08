import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//exercício 1

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

//exercício 2

type ToDos = {
    userID: number,
    id: number,
    title: string,
    completed: boolean
}

//exercício 3

const tarefas: ToDos[] = [
    {userID: 1,
    id: 1,
    title: "ir à academia",
    completed: true},
    {userID: 1,
    id: 2,
    title: "tomar banho",
    completed: true},
    {userID: 1,
    id: 3,
    title: "ir ao médico",
    completed: false},
    {userID: 2,
    id: 4,
    title: "escovar os dentes",
    completed: true},
    {userID: 2,
    id: 5,
    title: "estudar",
    completed: true},
    {userID: 2,
    id: 6,
    title: "comprar comida",
    completed: true},
    {userID: 3,
    id: 7,
    title: "assistir filme",
    completed: false}
]


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

//exercício 4

// app.get("/tarefas",(req: Request, res: Response) => {
//     const feito = req.query.completed
//     const completo = afazeres.filter((tarefa) => {
//         return feito === tarefa.completed.true
//     })

//     res.status(200).send(completo)
// })

//exercício 5

// app.post("/afazeres", (req: Request, res: Response) =>{
   



//     res.status(200).send()
// })


//exercício6

