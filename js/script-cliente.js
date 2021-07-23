const insertIntoTable = (tableId = '', values = []) => {
    let tbody= document.getElementById(tableId);
    let tr = tbody.insertRow()
    values.forEach((valor, index) => {
        let cell = tr.insertCell(index)
        cell.appendChild(document.createTextNode(valor))
    })
}

// Carrega LocalStorage
let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

// Adiciona clientes do LocalStorage na tabela
clientes.forEach(c => insertIntoTable('tabela-clientes', Object.values(c)))

let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Incluir cliente na tabela
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;

    let dados = {
         nome,
         cpf,
         email,
         endereco,
         telefone
    };

    //Validar telefone e email
    if(dados.cpf.length !== 11){
        swal('CPF inválido!', 'Digite o CPF valido', 'error');
    }else if(dados.telefone.length !== 11){
        swal('Telefone inválido!', 'Digite o telefone valido', 'error');
    }else{
        let valoresDados = Object.values(dados);
        insertIntoTable('tabela-clientes', valoresDados)

        //Incluir cliente no localstorage
        clientes.push(dados);

        let clientesConvertidos = JSON.stringify(clientes);

        localStorage.setItem('cliente', clientesConvertidos);

        swal('Deu certo!', 'Cliente cadastrado com sucesso!', 'success');
    }
});
