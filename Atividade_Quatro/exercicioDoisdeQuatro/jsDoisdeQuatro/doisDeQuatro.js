var gerandoTabelaDeProdutos = (produtos) => {
    const camposTabela = produtos.map((produto) => {
        return`
        <tr>
        <td>${produto.descricao}</td>
        <td>R$${(produto.preco).toFixed(2)}</td>
        </tr>
        `;
    });

    const tabelaHtml = `
    <table>
     <thead>
      <tr>
       <th>Descrição</th>
       <th>Preço</th>
      </tr>
     </thead>
     <tbody>
     ${camposTabela.join(' ')}
     </tbody>
    </table>
    `;

    return tabelaHtml;


};


var produtos = [{
    descricao: "Jaqueta De Couro",
    preco: 500.99
}, {
    descricao: "Jaqueta Lã",
    preco: 350.99
}, {
    descricao: "Jaqueta Moletom",
    preco: 250.50
}]

const tabelaHtml = gerandoTabelaDeProdutos(produtos);


document.body.innerHTML = tabelaHtml;