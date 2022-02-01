'use strict'

window.onload = iniciar

function iniciar(){
    document.getElementsByTagName('input')[1].onblur = comprobarPass

}

function comprobarPass(){

    let pass = document.getElementsByTagName('input')[1]
    if(pass.value.length < 7 ){
        alert('tu contraseña tiene menos de 7 caracteres')
    }else{
        if(pass.value.length > 20 ){
            alert ('tu contraseña tiene más de 20 caracteres')
        }
    }
}
