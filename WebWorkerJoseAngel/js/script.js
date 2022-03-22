'use strict'


//Declaramos el worker y le indicamos el script a ejecutar
let myWorker = new Worker('js/tarea.js');
let contador = 0
let div = document.getElementById('notificacion')
let divContador = document.getElementById('contador')

//Creamos notificación del worker
myWorker.onmessage = (evento) => {
    //console.log(evento.data);

    if(evento.data>60){
        div.innerText='Número mayor que 60'+' '+'('+evento.data+')'
        contador++
        divContador.innerText= 'Número de mensajes recibidos: '+contador
    }
}