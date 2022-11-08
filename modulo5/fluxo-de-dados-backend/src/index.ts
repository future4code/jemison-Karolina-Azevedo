import { Produto } from "./type"

import { produtos } from "./data"

import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//exercício 1

app.get("/test",(req: Request, res: Response) =>{
    res.send("Servidor rodando na porta 3003")
})

//exercício 4 e 8

app.post("/produtos", (req:Request, res:Response) => {
   
    const produtoName = req.body.name
    const produtoPrice = req.body.price
    const {name,price} = req.body

try{
    if(!name){
        const erro=new Error("O nome do produto não foi informado");
        erro.name="produtoNotFound";
        throw erro;
    }
    if(!price){
        const erro=new Error("O preço do produto não foi informado");
        erro.price="produtoNotFound";
        throw erro;
    }
    

    const newProduto: Produto = {
      id: Date.now().toString(),
      name: produtoName,
      price: produtoPrice
    }
  
    produtos.push(newProduto)
  
    res.send(produtos)
}catch(e:any){
    if(e.name==="produtoNotFound"){
        res.status(422).send(e.message)
    }else{
        res.status(500).send(e.message);
    }
}
  })

  //exercicio 5

  app.get("/allprodutos",(req:Request, res:Response)=>{

    const lista = produtos.map((produto)=>{
        return produto.lista
    })

    res.status(200).send(lista)
})
  

//exercício 6

//exercício 7

app.delete("/produtos/name", (req:Request, res:Response) => {

    const nome = req.params.name
  
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].name === nome) {
        produtos.splice(i, 1)
      }
    }
  
    res.send(produtos)
  })













app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});