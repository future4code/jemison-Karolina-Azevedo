type Contas = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const contas:Contas[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const emprestimo = (clientes:Contas[]):Contas[] => {
    const saldoAtualizado = clientes.map ((cliente) =>{
        let valor = cliente.debitos.reduce((acc:number, c:number) => acc +c, 0);
    }).filter((cliente) => {
        return cliente.saldoTotal < 0
    })

    return saldoAtualizado

}

console.log(emprestimo(contas))