
enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function catalogo (
    nome: string, 
    ano:number, 
    genero: Genero, 
    nota?: number)
    {
return ("nome: " + nome + ", ano de lançamento: " + ano + ", genero: " + genero + ", nota: " + nota)
}

console.log(catalogo("Duna", 2021, Genero.ACAO, 74))
