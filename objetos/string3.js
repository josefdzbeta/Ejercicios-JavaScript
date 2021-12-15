'use strict'

let nombreIntroducido = 0
let nombre
do{
    nombre = prompt('Introduce un nombre')
    nombreIntroducido ++

}while(nombre.toLowerCase() != 'fin')

console.log(`Numero de nombres introducidos ${nombreIntroducido}`)