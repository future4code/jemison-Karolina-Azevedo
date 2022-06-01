``` let i = 0;
  for (const numero of arrayDeNumeros){
    if (numero === numeroEscolhido){
      i++;
    }
  }
  if (i === 0){
    return ("Número não encontrado")
  } else{
    return (`O número ${numeroEscolhido} aparece ${i}x`)
  }
}```