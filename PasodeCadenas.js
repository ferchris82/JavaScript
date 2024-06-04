// Cadenas y funciones en JS
// cadenas inmutables en JS (no se puede modificar su valor)

function cambiarValor(parametro){
    parametro = 'Adios';
}

// Llamamos a la función
let argumento = 'Hola';
argumento = 'Hola Mundo';
console.log(`Antes función: ${argumento}`);
cambiarValor(argumento);
console.log(`Despues funcion: ${argumento}`);