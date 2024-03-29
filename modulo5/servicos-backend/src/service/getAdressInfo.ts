import axios from "axios"

async function getAdressInfo (cep: string) {
const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

console.log(data)

return `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`
}

export default getAdressInfo