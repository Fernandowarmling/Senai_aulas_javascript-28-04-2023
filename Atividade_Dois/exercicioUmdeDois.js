let calculoSoma = (numeros) => numeros.reduce((soma, numeros) => soma + numeros, 0);

let arrayNum = [1, 2, 3, 4, 5];
let resultado = calculoSoma(arrayNum);
console.log(resultado);