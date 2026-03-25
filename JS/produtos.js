const produtos = [
  {
    nome: "Camisa Preta",
    preco: 59.90,
    imagem: "https://via.placeholder.com/300"
  },
  {
    nome: "Tênis Branco",
    preco: 199.90,
    imagem: "https://via.placeholder.com/300"
  },
  {
    nome: "Boné",
    preco: 39.90,
    imagem: "https://via.placeholder.com/300"
  }
];

const container = document.querySelector('.product_container');

produtos.forEach(produto => {
  const card = document.createElement('div');
  card.classList.add('card_product');

  card.innerHTML = `
    <img src="https://picsum.photos/300/200">
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco}</p>
    <button>Comprar</button>
  `;

  container.appendChild(card);
});