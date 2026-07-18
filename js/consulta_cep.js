//Pegando o input cep do Dom
const inputCep = document.querySelector('#cep')
const formPessoa = document.querySelector('#form-pessoa')

//Capturando o evento ao peder o foco
inputCep.addEventListener('change',(evt) => {
    const numCep = evt.target.value.replace(/\D/g,'')

    if (numCep.length !== 8) {
        alert('CEP INVÁLIDO !!!')
        return
    }
    buscaDadosCep(numCep)
})

//Buscar os dados dos CEP no VIACEP
const buscaDadosCep = async (cep) => {
    //Tenta buscas dos dados no viacep
    try{
        //Busca os dados no via Cep
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        //convite os dados no formato json
        const dadosEndereco = await response.json()

        //Chama a função exibeDados
        exibeDados (dadosEndereco)

        //Caso haja algum erro é capturado pelo catch 
    } catch (erro) {
        console.log('Erro Apresentado', erro.message)
    }
    }

    //objeto literal campos que cada chave representa os input do dom
    const campos = {
        logradouro: document.querySelector('#logradouro'),
        bairro: document.querySelector('#bairro'),
        localidade: document.querySelector('#localidade'),
        uf: document.querySelector('#uf'),

    } 
    
    // Função exibe dados
    const exibeDados = (objDados) => {

        const divEndereco = document.querySelector('#div-dados-endereco')

        divEndereco.classList.remove('oculto')

       /* document.querySelector('#logradouro').value = objDados.logradouro
        document.querySelector('#logradouro').disabled = true
        document.querySelector('#bairro').value = objDados.bairro
        document.querySelector('#bairro').disabled = true
        document.querySelector('#localidade').value = objDados.localidade
        document.querySelector('#localidade').disabled = true
        document.querySelector('#uf').value = objDados.uf
        document.querySelector('#uf').disabled = true*/

     //Percorre o objeto, no formato JSON, do via cep
        for (let chave in campos) {

    //Atribui o  valor ao input
        campos[chave].value = objDados[chave]

    //bloqueia os inputs, não permite que o usuário apague os valores
        campos[chave].disabled = objDados[chave]
    }

    document.querySelector('#num-residencia').focus()
}

formPessoa.addEventListener('reset',() => {
    //Pega a div pai dos elementos do endereço
    const divEndereco = document.querySelector('#div-dados-endereco')

    //Remove da div o class oculto
    divEndereco.classList.add('oculto')
})
