
function frase (){

  const nome: string = "Karolina"
  const data: string = "21/01/1989"
  const nascimento: string[] = data.split("/")
  const dia: string = nascimento[0]
  const mes:string = nascimento[1]
  const ano:string = nascimento[2]



  return("Olá me chamo " + {nome} + ", nasci no dia " + {dia} + " do mês de " + {mes} + " do ano de " + {ano});
 

}

console.log(frase)