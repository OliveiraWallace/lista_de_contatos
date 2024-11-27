// referenciando os elementos do HTML
const form = document.getElementById('form-contato');
const nomeContatoInput = document.getElementById('nome-contato');
const telContatoInput = document.getElementById('telefone-contato');
const tabelaContatos = document.getElementById('tabela-contatos').getElementsByClassName('tbody')[0];

// function add novo contato
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulario
    
    // obtendo valores
    const nome = nomeContatoInput.value;
    const telefone = telContatoInput.value;

    if (nome && telefone) {
        // Cria uma nova linha na tabela
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>`;

        // Add nova linha à tabela
        tabelaContatos.appendChild(novaLinha);

        // Limpa campos de input apos cadastro
        nomeContatoInput.value = '';
        telContatoInput.value = '';

        // Foca no campo de nome após o cadastro
        nomeContatoInput.focus();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
})