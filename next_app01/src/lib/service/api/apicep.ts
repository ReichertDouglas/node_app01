
export async function apicep (cep: string) {

    const cepClean = cep.replace(/\D/g, '');

    if(cepClean.length !== 8){
        throw new Error('CEP inválido. Deve conter 8 dígitos numéricos.');
    }
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cepClean}/json/`)
        const addressData = await response.json();
        if(addressData.erro){
            throw new Error('CEP não encontrado.')
        }
        return{
            rua: addressData.logradouro,
            bairro: addressData.bairro,
            cidade: addressData.localidade,
            estado: addressData.uf,
        }
    }catch (error) {
        console.log(error)
        throw new Error ('Erro ao buscar o CEP.');
    }
}