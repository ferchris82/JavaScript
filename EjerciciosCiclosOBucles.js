// **************Sumar los primeros 5 numeros (for)*******************
/* let maximo = 5, acumuladorSuma = 0;
for(let numero = 1; numero <= maximo; numero++){
    // Imprimimos lo que se va a sumar
    console.log(`${acumuladorSuma} + ${numero}`);
    // Realizar la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
}
console.log(acumuladorSuma); */

// *************** Ciclo while ***********************
/* let numero = 1, maximo = 5, acumuladorSuma = 0;
while (numero <= maximo) {
    // Imprimimos lo que va a sumar
    console.log(`${acumuladorSuma} + ${numero}`);

    // Realizamos la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++;
}
console.log(acumuladorSuma); */

// ***************** Ciclo do While **********************
let numero = 1, maximo = 5, acumuladorSuma = 0;
do{ 
    // Imprimimos lo que va a sumar
    console.log(`${acumuladorSuma} + ${numero}`);

    // Realizamos la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++;
} while (numero <= maximo);
console.log(acumuladorSuma);
