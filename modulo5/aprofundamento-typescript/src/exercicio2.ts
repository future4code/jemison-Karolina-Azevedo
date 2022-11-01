
type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatistica {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma= 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Amostra = {
    numeros: number[]
    obterEstatisticas: (numeros: number[]) => Estatistica
}

const amostras = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
}

console.log(amostras.obterEstatisticas(amostras.numeros));
