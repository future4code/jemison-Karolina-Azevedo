/*a)
const minhaString: string = 13
console.log(minhaString);

src/exercicio1.ts:2:5 - error TS2322: Type 'number' is not assignable to type 'string'.
Não aceita o valor do tipo nunmber, pois foi declarado o tipo string*/

//b)

//let meuNumero: number | string

//c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}

enum CorFavorita {
    VERMELHO ="vermelho", 
    LARANJA = "laranja",
    AMARELO = "amarelo", 
    VERDE = "verde",
    AZUL = "azul", 
    ANIL = "anil",
    VIOLETA = "violeta"
}

const objeto1: Pessoa = {
    nome: "Karolina",
    idade: 33,
    corFavorita: CorFavorita.AMARELO
}

const objeto2: Pessoa = {
    nome:"João",
    idade: 34,
    corFavorita: CorFavorita.LARANJA
}

const objeto3: Pessoa = {
    nome:"Maria",
    idade: 35,
    corFavorita: CorFavorita.VERDE
}

console.log(objeto1, objeto2, objeto3);




