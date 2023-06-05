let produto = { nome: "Coca-Cola", preco: 12.00, quantidade: 10 }

function geraInformacoesDoproduto(produto){
    let {nome,preco,quantidade} = produto;

    return `Produto:${nome} Preço:R$ ${preco.toFixed(2)} Quanidade:${quantidade}`
}

let imprimeInfoProdutos = geraInformacoesDoproduto(produto);
console.log(imprimeInfoProdutos)