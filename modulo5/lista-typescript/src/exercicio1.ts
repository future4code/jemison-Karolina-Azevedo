
function frase (nome:string, data:string){

  const nascimento: string[] = data.split("/")
  const dia: string = nascimento[0]
  const mes:string = nascimento[1]
  const ano:string = nascimento[2]



  return("Olá me chamo " + nome + ", nasci no dia " + dia + " do mês " + mes + " do ano de " + ano);
 

}

console.log(frase("Karolina", "21/01/1989"))