/*EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

1- Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}

2- a) {nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}
b)Copia o objeto inteiro

3- a) false
undefined
b) Não consta "altura" dentro do objeto


EXERCICIOS DE ESCRITA DE CÓDIGO
1-
a)
const eu = {
    nome: "Karolina",
    apelidos: ["Karol", "Kaka", "Karolzinha"]
    }

    function sobreMim(objeto){
    
    console.log(`Meu nome é ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
    }

    sobreMim(eu)

b)
const euNovo = {...eu,
    apelidos: ["Ka", "Karo", "Lina"]
    }

    sobreMim(euNovo)
    
2-
a)
const pessoa = {
nome: "João",
idade: 40,
profissao: "Engenheiro"
}

const outraPessoa = {
nome: "Maria",
idade: 35,
profissao: "Advogada"
}

b)
function paraImprimir(objeto){
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length];

}

console.log(paraImprimir(pessoa))

console.log(paraImprimir(outraPessoa))

3-

a)
const carrinho = []
b)
const primeiraFruta = {
nome: "banana",
disponivel: "true"
}

const segundaFruta = {
    nome: "goiaba",
    disponivel: "true"
}

const terceiraFruta = {
    nome: "manga",
    disponivel: "true"
}
c)
function frutaNoCarrinho(fruta){
carrinho.push(fruta)
}
frutaNoCarrinho(primeiraFruta)
frutaNoCarrinho(segundaFruta)
frutaNoCarrinho(terceiraFruta)
d)
console.log(carrinho)
*/

















