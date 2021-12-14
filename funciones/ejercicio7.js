'use strict'

function suma5Numeros() {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt('Introduce un numero'));
        suma+=numero;
    }
    return suma;
}
console.log(`suma de valores ${suma5Numeros}`)