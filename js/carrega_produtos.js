
import { produtosCandyShop } from "./produtos.js";

  //PEGANDO ELEMENTO DO DOM
const section_cards = document.querySelector('#cards');

//FUNÇÃO PARA CARREGAR OS PRODUTOS
const listarProdutos = () => {
    section_cards.innerHTML = '';

    // Nota: Se o seu array de 20 doces se chamar 'produtosCandyShop', mude aqui para produtosCandyShop.forEach
    produtosCandyShop.forEach((elem, i) => {
        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        const imgProduto = document.createElement('img');
        imgProduto.setAttribute('src', elem.caminho_da_imagem);
        imgProduto.setAttribute('alt', elem.descricao_produto);
        imgProduto.setAttribute('class', 'img_card');

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerHTML = elem.descricao_produto;

        const h3Valor = document.createElement('h3');
        h3Valor.setAttribute('class', 'valor_card');
        // Correção aplicada: uso de crases (``) para que a interpolação ${} funcione corretamente
        h3Valor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`;

        const btnCard = document.createElement('button');
        btnCard.setAttribute('class', 'btn_card');
        btnCard.innerHTML = 'Adicionar';

        divCard.appendChild(imgProduto);
        divCard.appendChild(h2Titulo);
        divCard.appendChild(h3Valor);
        divCard.appendChild(btnCard);

        section_cards.appendChild(divCard);
    });
};

listarProdutos();