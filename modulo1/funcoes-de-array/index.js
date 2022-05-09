/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1- a) Vai ser impresso um novo array igual ao array original

2- a) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3- a) [{ nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" }]

EXERCÍCIOS DE ESCRITA DE CÓDIGO

1-
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
a)
 const nomesPets = pets.map((item) => {
     return item.nome
 })
 console.log(nomesPets)

 b)
 const cahorroSalsicha = pets.filter((item) => {
     return item.raca === "Salsicha"
 })
 console.log(cahorroSalsicha)

 c)
 const cachorroPoodle = pets.filter((item) => {
     return item.raca === "Poodle"
 })
 console.log(cachorroPoodle)

 const enviarMensagem = cachorroPoodle.map((item) => {
     return item.nome
 })
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", enviarMensagem, "!")

2-


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 a)
 const nomesItens = produtos.map((item) => {
     return item.nome
 })
console.log(nomesItens)

b)
 const itensComDesconto = produtos.map((item) => {
     return `${item.nome}, ${item.preço * 0,95}`
 })
 console.log(itensComDesconto)
 
 c)
 const apenasBebidas = produtos.filter((item) => {
     return item.categoria === "Bebidas"
 })

 console.log(apenasBebidas)

 d)
const apenasYpe = produtos.filter((item) => {
return item.nome.includes("Ypê")
})

console.log(apenasYpe)

e)
const frasesYpe = apenasYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(frasesYpe)*/