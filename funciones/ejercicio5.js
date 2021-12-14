'use strict'

function cantidadDigitos(a){
    let count = 0;
    while (a != 0)
    {
        a = Math.floor(a / 10);
        ++count;
    }
    return count;
}

console.log(`tu numero tiene ${cantidadDigitos(24)} digitos`)
