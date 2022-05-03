/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1-a) O código testa se o número escolhido pelo usuário é divisivel por 2.
b) Números pares.
c) Números ímpares.

2-a) Para dizer qual o preço de cada fruta.
b) O preço da fruta maçã é R$2.25
c) O preço da fruta pera é R$ 5

3-a) Crianco uma variável número com valor incluído pela resposta do usuário.
b) 10 - Esse número passou no teste
-10 - Não imprime nada
c) Existe um erro, pois a variável criada dentro do bloco não consegue ser acessada fora dela.

EXERCÍCIOS DE ESCRITA DE CÓDIGO

1-
const idadeUsuario = Number(prompt("Qual a sua idade?"))
if (idadeUsuario >= 18) {
console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

2-
const turnoEstudo = prompt("Em qual turno você estuda? M, V ou N?")
if (turnoEstudo === "M"){
    console.log("Bom dia!")
} else if (turnoEstudo === "V"){
    console.log("Boa tarde!")
} else if (turnoEstudo === "N"){
    console.log("Boa noite!")
}

3-
const turnoEstudo = prompt("Em qual turno você estuda? M, V ou N?")
switch (turnoEstudo){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
}

4-
const genero = prompt("Qual o gênero do filme?")
const preco = Number(prompt("Qual o preço do ingresso?"))
if(genero === "fantasia" && preco < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme! :(")
}
*/