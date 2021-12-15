'use strict'



function encontrarCadena(){
    let cadena = prompt('Introduce una cadena')
    let clave = prompt('Palabra a buscar')

    if(cadena.includes(clave)){
        console.log('palabra encontrada' + 'en la posicion cadena.search(clave)')
    }else{
        console.log('no se lo que es una leyenda')
    }

}
encontrarCadena()