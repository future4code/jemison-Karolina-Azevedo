const n1 = Number(process.argv[2])
const n2 = Number(process.argv[3])

switch(operacao){
    case "soma":
        console.log(n1 + n2)
        break;
    case "subt":
        console.log(n1 - n2)
        break;
    case "divisao":
        console.log(n1 / n2)
        break;
    case "multip":
        console.log(n1 * n2)
        break;
}