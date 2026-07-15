import{listItens} from "./carrinho.js";

//Montando a tela do Carrinho
const montaTelaCarrinho = () => {
    //Pegando Elementos do Dom
    const sectionItensCarrinho = document.querySelector('.products-column')

    sectionItensCarrinho.innerHTML=''

    listItens().forEach((elem, i) => {
      const sectionItem = document.createElement('section')
      sectionItem.setAttribute('class','item')
      sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto}/>
      <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>${elem.valor_unitario}</p> 
        <input type="number" name='quant${i}' id='quant${i}' class="input-item" value="${1}"> 
        <p class='tot-item'>${elem.valor_unitario * 1}</p>`
        
        const imgRemover = document.createElement('img') 
        imgRemover.setAttribute('scr','../imagens/remover.png')
        imgRemover.setAttribute('alt', 'Remover')
        imgRemover.setAttribute('class', 'img-remover')
        
        imgRemover.addEventListener('click',()=>{
            alert(i)
        })
    
        sectionItem.appendChild(imgRemover)
        sectionItensCarrinho.appendChild(sectionItem)
    });
}
montaTelaCarrinho()