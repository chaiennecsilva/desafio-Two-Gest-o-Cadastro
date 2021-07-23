let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Incluir cliente na tabela
    let codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('nome').value;
    let unitario = document.getElementById('custo').value;
    let preco = document.getElementById('preco').value;
   

    let dados = {
         codigo,
         nome,
         unitario,
         preco
    };

    let valoresDados = Object.values(dados);

    let tbody= document.getElementById('tabela-produtos');
    let tr = document.getElementById('tr');
    tbody.append(tr);

    valoresDados.forEach(valor => {
        let td = document.getElementById('td');
        tr.append(td);
        td.append(valor);
    });

        //Incluir produto no localstorage
        let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

        produtos.push(dados);

        let produtosConvertidos = JSON.stringify(produtos);

        localStorage.setItem('produto', produtosConvertidos);

        swal('Deu certo!', 'Produto cadastrado com sucesso!', 'sucess');

});