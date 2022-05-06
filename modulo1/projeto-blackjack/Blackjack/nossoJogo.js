/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
    const mensagemInicial = "Boas vindas ao jogo de Blackjack!"

   console.log(mensagemInicial)

   
if(confirm("Quer iniciar uma nova rodada?")){
   const carta = comprarCarta(); 
   let sorteio1 = comprarCarta();
   let sorteio2 = comprarCarta();
   let comp1 = comprarCarta();
   let comp2 = comprarCarta();

   console.log(`Usuário - cartas: ${sorteio1.texto} ${sorteio2.texto} - pontuação ${sorteio1.valor+sorteio2.valor}`) 
   console.log(`Usuário - cartas: ${comp1.texto} ${comp2.texto} - pontuação ${comp1.valor+comp2.valor}`)  

   if(sorteio1.valor+sorteio2.valor === comp1.valor+comp2.valor){
      console.log("Empate!")
   }
   if(sorteio1.valor+sorteio2.valor > comp1.valor+comp2.valor){
      console.log("O usuário ganhou!")
   }
   
   if(sorteio1.valor+sorteio2.valor < comp1.valor+comp2.valor){
      console.log("O computador ganhou!")
   }
} else {
console.log("O jogo acabou")
}
*/