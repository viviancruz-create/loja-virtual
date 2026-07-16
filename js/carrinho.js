//localStorage.removeItem("itensSessao");
//localStorage.clear()


//Criando o Array de Itens do Carrinho
const ItensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//const ItensCarrinho = JSON.parse(sessionStorage.getItem('itensSessao')) || []

//Criando Arrom Item
const fobjItem = (objProduto) => {
    const item= {
    id_produto: objProduto.id_produto,
    descricao_produto: objProduto.descricao_produto,
    caminho_da_imagem: objProduto.carrinho_da_imagem,
    valor_unitario: objProduto.valor_unitario,
    quantidade: 1
    }

    return item
}

//Pegando o indice do Array
console.log("índice do array ->>>",ItensCarrinho.finIndex(elem => elem.id_produto == 12))

//Função para adicionar o item no Array
const addItem = (objItem) => {
    ItensCarrinho.push(fobjItem (objItem))

    localStorage.setItem('itensSessao', JSON.stringify(ItensCarrinho))

    //sessionStorage.setItem(`itensSessao`, JSON.stringify(itensCarrinho))
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