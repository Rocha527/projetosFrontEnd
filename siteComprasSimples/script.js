document.addEventListener("DOMContentLoaded", function () {
    const prateleira = document.getElementById("prateleira");

    // Exemplo de produtos
    const produtos = [
        { nome: "Produto 1", imagem: "./imagens/produto1.png", descricao: "Descrição do Produto 1" },
        { nome: "Produto 2", imagem: "./imagens/produto2.png", descricao: "Descrição do Produto 2" },
        { nome: "Produto 3", imagem: "./imagens/produto3.png", descricao: "Descrição do Produto 3" },
        // Adicione mais produtos conforme necessário
    ];

    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;

        const quantidadeInput = document.createElement("input");
        quantidadeInput.type = "number";
        quantidadeInput.value = 0;
        quantidadeInput.min = 0;
        quantidadeInput.classList.add("quantidade-input");

        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(descricao);
        produtoDiv.appendChild(quantidadeInput);

        prateleira.appendChild(produtoDiv);
    });
});
