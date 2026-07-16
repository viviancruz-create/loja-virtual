// Corrigido: importando também a função removeItem
import { listItens, removeItem } from "./carrinho.js";

// Montando a tela do Carrinho
const montaTelaCarrinho = () => {
    // Corrigido: buscando pelo ID #itens-carrinho em vez da classe .products-column
    const sectionItensCarrinho = document.querySelector('#itens-carrinho');

    if (!sectionItensCarrinho) return; // Trava de segurança caso o elemento não seja encontrado
    sectionItensCarrinho.innerHTML = '';

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section');
        sectionItem.setAttribute('class', 'item');
        
        // Formatando o valor para exibição correta em Reais
        const valorFormatado = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`;
        const totalItemFormatado = `R$ ${(elem.valor_unitario * elem.quantidade).toFixed(2).replace('.', ',')}`;

        sectionItem.innerHTML = `
            <img src="${elem.caminho_da_imagem}" alt="${elem.descricao_produto}" class="img-item"/>
            <p class="descricao">${elem.descricao_produto}</p> 
            <p class="vlr-unitario">${valorFormatado}</p> 
            <input type="number" name="quant${i}" id="quant${i}" class="input-item" value="${elem.quantidade}" min="1"> 
            <p class="tot-item">${totalItemFormatado}</p>
        `;
        
        const imgRemover = document.createElement('img');
        // Corrigido: atributo 'src' em vez de 'scr' e caminho da pasta de imagens ajustado
        imgRemover.setAttribute('src', '../imagem/remover.png');
        imgRemover.setAttribute('alt', 'Remover');
        imgRemover.setAttribute('class', 'img-remover');
        
        imgRemover.addEventListener('click', () => {
            if (confirm(`Deseja remover ${elem.descricao_produto} do seu carrinho?`)) {
                removerItemCarrinho(i);
            }
        });
    
        sectionItem.appendChild(imgRemover);
        sectionItensCarrinho.appendChild(sectionItem);
    });
};

const removerItemCarrinho = (pos) => {
    removeItem(pos);
    montaTelaCarrinho();
};

montaTelaCarrinho();