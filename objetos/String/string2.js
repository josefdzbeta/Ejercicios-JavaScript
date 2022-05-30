'use strict'

let nombreIntroducido = 0
let nombre
do{
    nombre = prompt('Introduce un nombre')
    nombreIntroducido ++

}while(nombre != 'fin')

console.log(`Numero de nombres introducidos ${nombreIntroducido}`)