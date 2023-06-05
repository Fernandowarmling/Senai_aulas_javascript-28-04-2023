let contaLetras = (words)=> words.reduce((totaldeletras, str)=> totaldeletras+str.length,0)






let palavras =["fernando", "warmling"];
let totaldeletras = contaLetras(palavras);
console.log(totaldeletras);