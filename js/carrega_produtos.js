
import { produtosCandyShop } from "./produtos.js";

  //PEGANDO ELEMENTO DO DOM
const section_cards = document.querySelector('#cards')



//FUNÇÃO PARA CARREGAR OS PRODUTOS
const listarProdutos = () => {
    section_cards.innerHTML = ''
    
}

listarProdutos()

//Filtrando As Seções Com A Coleção map
const listarsecoes = ()=>{
  //criando a coleção de MAP 
  const secoesFiltrada =new Map()

produtosCandyShop.forEach((elem, i)=>{

//Criando a chave 
  secoesFiltrada.set(elem.id_secao, elem)
})

//Convertendo o MAP em Array
const secoesMenu = Array.from(secoesFiltrada.values())

//Retornando o Array Convertido
return secoesMenu
}

//Montando os links Seções
const montarSecoes = ()=>{
  //Pegando o elemento do Dom
  const ulMenu = document.querySelector('#menu-secoes')

  //limpando o elemento
ulMenu.innerHTML = ''

//Percorrendo o Array das seções filtrada
  listarsecoes().forEach((elem, i) => {
    
    //criando o elemento li
    const lisecao = document.createElement('li')

    //criando o elemento a
    const aSecao = document.createElement('a')
    aSecao.setAttribute('href', '#')
    aSecao.setAttribute('class', 'lnk-secao')
    aSecao.innerHTML = elem.nome_secao

    //Capturando o click dos links
    aSecao.addEventListener('click',()=>{
    
      montandoCards(produtosFiltrados(elem.id_secao))
      })

      //Adicionando o elemento filho a no elemento li
      lisecao.appendChild(aSecao)

      //Adicionando o elemento filho li no elemento do Dom ul
      ulMenu.appendChild(lisecao)

    })
  
}

montarSecoes()

//Filtrando produtos
const produtosFiltrados = (idSecao) => {
  return produtosCandyShop.filter(elem => elem.id_secao === idSecao)
}

//Filtrado pelo input
//Pegando o input no Dom
const inputPesquisa = document.querySelector("#pesquisa")

//Capturando o Evento input
  inputPesquisa.addEventListener('input', (evt) => {
//Capturando o texto do input e o deixando-o em Minúsculo na variável  txtInput
let txtInput = evt.target.value.toLowerCase()

//Filtra os Dados Montando os Cards Pelo Filter e includes
montandoCards(produtosCandyShop.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))
  })

//Montando Cards
const montandoCards = (objprodutos) => {
  section_cards.innerHTML = '';


    objprodutos.forEach((elem, i) => {
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

        btnCard.addEventListener('click',()=>{
          //Redireciona para Página carrinho.html
          window.location.href = "/paginas/carrinho.html"
        })

        divCard.appendChild(imgProduto);
        divCard.appendChild(h2Titulo);
        divCard.appendChild(h3Valor);
        divCard.appendChild(btnCard);

        section_cards.appendChild(divCard);
    })

}

montandoCards(produtosCandyShop)
montarSecoes()