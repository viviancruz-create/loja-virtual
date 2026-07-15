//localStorage.removeItem("itensSessao");
//localStorage.clear()


//Criando o Array de Itens do Carrinho
const ItensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//const ItensCarrinho = JSON.parse(sessionStorage.getItem('itensSessao')) || []

//Função para adicionar o item no Array
const addItem = (objItem) => {
    ItensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', JSON.stringify(ItensCarrinho))
}

//Listar Itens no Carrinho
const listItens = () => {
    const ItensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    return ItensSelecionados
}

//Remover elemento
const removeItem = (pos)=>{
    ItensCarrinho.splice(pos, 1)

    localStorage.setItem('itensSessao', JSON.stringify(ItensCarrinho))
    //sessionsStorage.setItem('itensSessao', JSON.stringfy(itensCarrinho))
}

export { addItem, listItens }