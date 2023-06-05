let produtoDescricao = (infoProduto) =>{ let{pNome,pMarca,pPreco}= infoProduto
return `Produto: ${pNome}\nMarca: ${pMarca} \nPreco: ${pPreco}`
}

let infoProduto = {
    pNome: "Celular",
    pMarca: "apple",
    pPreco: 1500.00,
}

let descricao = produtoDescricao(infoProduto);

console.log(descricao)
