let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Incluir cliente na tabela
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let endereço = document.getElementId('endereço').value;
    let telefone = document.getElementById('telefone').value;

    let dados = {
         nome,
         cpf,
         email,
         endereço,
         telefone
    };

    //Validar telefone e email 
    if(dados.cpf.length !== 11){
        swal('CPF inválido!', 'Digite o CPF valido', 'error');
    }else if(dados.telefone.length !== 11){
        swal('Telefone inválido!', 'Digite o telefone valido', 'error');
    }else{
        let valoresDados = Object.values(dados);

        let tbody= document.getElementById('tabela-clientes');
        let tr = document.getElementById('tr');
        tbody.append(tr);

        valoresDados.forEach(valor => {
            let td = document.getElementById('td');
            tr.append(td);
            td.append(valor);
        });

        //Incluir cliente no localstorage
        let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

        clientes.push(dados);

        let clientesConvertidos = JSON.stringify(clientes);

        localStorage.setItem('cliente', clientesConvertidos);

        swal('Deu certo!', 'Cliente cadastrado com sucesso!', 'sucess');
    }
});