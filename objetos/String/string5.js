'use strict'

function palindromo() {
    let palabra = prompt('Introduce una palabra')
    let alReves = palabra.split("").reverse().join("")

    if(palabra == alReves){
        console.log('Se nota que es un ejercicio de Paco')
    }else{
        console.log('Palabra no palindroma')
    }
}
palindromo()