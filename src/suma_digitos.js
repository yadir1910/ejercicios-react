



const { type } = require('os');
const readline = require('readline');
var y = 0;
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question(' escriba un número', function(respuesta){
   
     respuesta.split('').forEach(respuesta => y += parseInt(respuesta));
    console.log(`la suma de sus digitos  es: ${y}`);

    interfazCaptura.close();
});