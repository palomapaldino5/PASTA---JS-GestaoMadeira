// script.js
// Cria um array para armazenar os produtos
let estoque = [];

// Função para renderizar a lista de produtos
function renderizarEstoque() {
    const lista = document.getElementById('estoque-lista');
    lista.innerHTML = ''; // Limpa a lista antes de renderizar

    estoque.forEach((produto, index) => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - Quantidade: ${produto.quantidade}`;

        // Botão para remover o produto
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerProduto(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

// Função para adicionar um produto ao estoque
function adicionarProduto(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nomeInput = document.getElementById('nome-produto');
    const quantidadeInput = document.getElementById('quantidade-produto');

    const produto = {
        nome: nomeInput.value,
        quantidade: parseInt(quantidadeInput.value) // Converte a quantidade para número
    };

    estoque.push(produto); // Adiciona o produto ao array
    renderizarEstoque(); // Renderiza a lista atualizada

    // Limpa os campos do formulário
    nomeInput.value = '';
    quantidadeInput.value = '';
}

// Função para remover um produto do estoque
function removerProduto(index) {
    estoque.splice(index, 1); // Remove o produto pelo índice
    renderizarEstoque(); // Renderiza a lista atualizada
}

// Adiciona o evento de submit ao formulário
document.getElementById('estoque-form').addEventListener('submit', adicionarProduto); 