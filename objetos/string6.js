'use strict'

function comprobarEmail(a){
    let correo ='asd@gmail.com'
    
    if(correo.includes(arroba)){
        console.log('incluye @')
    }else{
        console.log('no incluye @')
    }
}

let arroba = '@'
comprobarEmail(arroba)