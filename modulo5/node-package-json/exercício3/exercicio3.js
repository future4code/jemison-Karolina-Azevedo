listaTarefas = {
    "Lavar a louça",
    "Comprar leite"
}

const novaLista = process.argv[2]

listaTarefas.push(novaLista)

console.log("Tarefa adicionada com sucesso")
console.table({Tarefas: listaTarefas})