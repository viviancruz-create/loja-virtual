//Criando o Array de Itens do Carrinho
const ItensCarrinho = []

//Função para adicionar o item no Array
const addItem = (objItem)=> {
    ItensCarrinho.push(objItem)
}

//Listar Itens no Carrinho
const listItens = () => {
    return ItensCarrinho
}

export{addItem}