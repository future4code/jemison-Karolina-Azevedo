/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

1- O laço acrecenta +1 a cada valor de forma contínua, desde que esse valor seja menor que 5.
Será impresso no console: 0 1 2 3 4

2- a) 19 21 23 25 27 30
b) Não

3-
*
**
***
****

EXERCÍCIOS DE ESCRITA DE CÓDIGOS

1-

let totalBichinhos = Number(prompt("Quantos bichinhos você tem?"))
if (totalBichinhos > 0){
    let nomesPet = []
    for (let i = 0; i < totalBichinhos; i++){
        let petUsuario = prompt("Qual o nome do seu pet?")
     }
     console.log(nomesPet.push(petUsuario))
    
} else (totalBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")
}


2-

let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50]
let arrayPares = []
a)
for(let i = 0; i < arrayOriginal.length; i++){
    elemento = arrayOriginal[i]
    console.log(elemento)
}
b)
for(let i = 0; i < arrayOriginal.length; i++){
    elemento = arrayOriginal[i]
    console.log(elemento / 10)
}
c)
for(pares of arrayOriginal){
    if(pares % 2 === 0){
        arrayPares.push(pares)
        console.log(arrayPares)
    }
}*/