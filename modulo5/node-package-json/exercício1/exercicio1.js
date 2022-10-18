/*
1- a) Devemos usar o process.argv, no qual a partir do [2] acessamos os valores/parâmetros passados.*/

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log('Olá,' + nome + '! Você tem' + idade + 'anos.')

const mais7anos = Number(process.argv[3]) + 7

console.log('Olá,' + nome + '! Você tem' + idade + 'anos. Em sete anos você terá' + mais7anos + '.')