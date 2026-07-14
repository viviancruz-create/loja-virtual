//Criando o Array de Itens do Carrinho
const ItensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//Função para adicionar o item no Array
const addItem = (objItem)=> {
    ItensCarrinho.push(objItem)

    localStorage.setItem('itensSessao' , ItensCarrinho)
}

//Listar Itens no Carrinho
const listItens = () => {
    const ItensSelecionados = JSON.stringify(localStorage.getItem('intensSessao'))

    return ItensCarrinho
}

//Montando a tela do Carrinho
const montaTelaCarrinho = () => {
    //Pegando Elementos do Dom
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listItens().forEach((elem, i) => {
      const sectionItem = document.createElement('section')
      sectionItem.setAttribute('class','item')
      sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}/>
      <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>${elem.valor_unitario}</p> 
        <input type="number" name='quant${i}' id='quant${i}' class="input-item" value="${1}"> 
        <p class='tot-item'>${elem.valor_unitario * 1}</p>
        <img src="../imagens/icones/remover.png" alt="" class="img-remover">`
    
        sectionItensCarrinho.appendChild(sectionItem)
    });
}
export{addItem}