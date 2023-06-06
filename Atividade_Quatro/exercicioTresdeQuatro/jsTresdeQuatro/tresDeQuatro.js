var gerandoLista = (garrafas) => {
    const elementosLista = garrafas.map((garrafa) => {
        return `
   <li>
   ${garrafa.descricao} 
   R$${(garrafa.preco).toFixed(2)}
   </li>  
    `;
    });

    const listaDeGarrafas =`
        <ul>
            ${elementosLista.join(' ')}
        </ul>
        `;

    return listaDeGarrafas;

}






var garrafas = [{
    descricao: "Whiski Garrafa",
    preco: 250.00

}, {
    descricao: "Vodka Garrafa",
    preco: 200.00
}, {
    descricao: "Espumante" ,
    preco: 150.00
}
]

const listaDeGarrafas = gerandoLista(garrafas);

document.body.innerHTML = listaDeGarrafas