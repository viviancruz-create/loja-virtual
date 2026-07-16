// Criando o Array de Itens do Carrinho puxando do localStorage
const ItensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || [];

// Criando Arrow Function para formatar o objeto Item
const fobjItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        caminho_da_imagem: objProduto.caminho_da_imagem, // Corrigido: era carrinho_da_imagem
        valor_unitario: objProduto.valor_unitario,
        quantidade: 1
    };
    return item;
};

// Corrigido: findIndex no lugar de finIndex (comentado para não poluir o console)
// console.log("índice do array ->>>", ItensCarrinho.findIndex(elem => elem.id_produto == 12));

// Função para adicionar o item no Array
const addItem = (objItem) => {
    ItensCarrinho.push(fobjItem(objItem));
    localStorage.setItem('itensSessao', JSON.stringify(ItensCarrinho));
};

// Listar Itens no Carrinho
const listItens = () => {
    const ItensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || [];
    return ItensSelecionados;
};

// Remover elemento do Carrinho
const removeItem = (pos) => {
    ItensCarrinho.splice(pos, 1);
    localStorage.setItem('itensSessao', JSON.stringify(ItensCarrinho));
};

// Corrigido: adicionado removeItem à lista de exportação
export { addItem, listItens, removeItem };