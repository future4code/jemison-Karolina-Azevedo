import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//exercício 1
app.get("/", (req:Request, res:Response) => {       

    res.send("Hello from Express")
})


//exercício 2
type TipoArray = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}
//exercício 3
const usuarios: TipoArray[] = [
    {id:1,  
    name:"Karolina",
    phone: 99999999,
    email: "karolina@email.com.br",
    website: "www.karolina.com.br"
},
    {id:2,
    name:"João",
    phone: 88888888,
    email: "joao@email.com.br",
    website: "www.joao.com.br"
},
    {id:3,
    name:"Maria",
    phone: 77777777,
    email: "maria@email.com.br",
    website: "www.maria.com.br"
},
    {id:4,
    name:"André",
    phone: 66666666,
    email: "andre@email.com.br",
    website: "www.andre.com.br"
},
    {id:5,
    name:"Joana",
    phone: 88888888,
    email: "joana@email.com.br",
    website: "www.joana.com.br"
}]

//exercício4
app.get("/users", (req: Request, res: Response) =>{
    if (!usuarios.length){
        res.status(401).send("Deu erro")
    }
    res.status(201).send(usuarios)
}
)

//exercício 5

type TipoPost = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//exercício 6

const posts:TipoPost[] = [
    {id: 1,
    title: "Postagem Karolina",
    body: "qualquer coisa Karolina",
    userId: 1
    },
    {id: 1,
    title: "Postagem João",
    body: "qualquer coisa João",
    userId: 2
    },
    {id: 2,
    title: "Postagem Maria",
    body: "qualquer coisa Maria",
    userId: 3
    },
    {id: 2,
    title: "Postagem André",
    body: "qualquer coisa André",
    userId: 4
    },
    {id: 3,
    title: "Postagem Joana",
    body: "qualquer coisa Joana",
    userId: 5
    }
]

//exercício 7 

app.get("/posts", (req: Request, res: Response) =>{
    if (!posts.length){
        res.status(401).send("Deu erro")
    }
    res.status(201).send(posts)
}
)

//exercício 8

app.get("/posts/:userId", (req: Request, res: Response) =>{
    const idPost = req.params.userId
    const postFiltrado = posts.filter((post) => {
        return Number(idPost) === post.userId
    })
    res.status(200).send(postFiltrado)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})