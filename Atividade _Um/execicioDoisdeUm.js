let data= new Date();

let dataFormatada = formatarData(data)

function formatarData(data){
    let dia = data.getDate().toString().padStart(2,'0');
    let mes = (data.getMonth()+1).toString().padStart(2,'0')
    let ano = data.getFullYear().toString();

    return `${dia}/${mes}/${ano}`
}

console.log(dataFormatada)