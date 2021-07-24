let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Incluir cliente na tabela
    let codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('nome').value;
    let unitario = document.getElementById('custo').value;
    let preco = document.getElementById('venda').value;
   

    let dados = {
         codigo,
         nome,
         unitario,
         preco
    };

    let valoresDados = Object.values(dados);

    let tbody= document.getElementById('tabela-produtos');
    let tr= tbody.insertRow()
    valoresDados.forEach((valor, index)=>{
        let cell = tr.insertCell(index)
        cell.appendChild(document.createTextNode(valor))
    })

        //Incluir produto no localstorage
        let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

        produtos.push(dados);

        let produtosConvertidos = JSON.stringify(produtos);

        localStorage.setItem('produto', produtosConvertidos);

        swal('Deu certo!', 'Produto cadastrado com sucesso!', 'success');

});