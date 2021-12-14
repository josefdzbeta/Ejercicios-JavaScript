'use strict'

function saberCuatri(){
    let fecha = new Date()
    let mes = fecha.getMonth()
    let cuatrimestre

    if (mes >= 0 && mes < 4){
        return cuatrimestre = console.log('Primer cuatrimestre')
    }
    if (mes >= 4  && mes < 8){
        return cuatrimestre = console.log('Segundo cuatrimestre')
    }
    if (mes >= 8  && mes < 12){
        
        return cuatrimestre = console.log('Tercer cuatrimestre')
    }
}

saberCuatri()
