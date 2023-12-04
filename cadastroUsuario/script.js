// Lista de clientes (pode ser armazenada em um banco de dados real no lado do servidor)
let clientes = [];

// Função para cadastrar um novo cliente
function cadastrarCliente() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (nome && email && telefone) {
        const novoCliente = { nome, email, telefone };
        clientes.push(novoCliente);
        exibirClientes();
        limparFormulario();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para exibir a lista de clientes
function exibirClientes() {
    const listaClientes = document.getElementById("listaClientes");
    listaClientes.innerHTML = "";

    clientes.forEach(cliente => {
        const itemCliente = document.createElement("div");
        itemCliente.innerHTML = `<strong>${cliente.nome}</strong> - ${cliente.email} - ${cliente.telefone}`;
        listaClientes.appendChild(itemCliente);
    });
}

// Função para limpar o formulário após o cadastro
function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
}

// Exibe os clientes iniciais ao carregar a página
exibirClientes();

