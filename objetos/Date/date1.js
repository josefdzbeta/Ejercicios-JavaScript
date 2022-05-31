'use strict'

let mes = new Date()
let resultado = mes.getMonth()

if (resultado >= 0 && resultado < 3 ) {
    console.log('Primer Cuatrimestre')
}else if (resultado >= 3 && resultado < 6 ){

    console.log('Segundo Cuatrimestre')
} 
else if (resultado >= 6 && resultado < 9 ){
    
    console.log('Tercer Cuatrimestre')
} 
else if (resultado >= 9 && resultado < 12 ){
    
    console.log('Cuarto Cuatrimestre')
} 

