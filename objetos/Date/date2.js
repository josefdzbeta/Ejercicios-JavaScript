'use strict'

let edad = prompt("Introduce tu edad \n\n Ej: mm/dd/aaaa");
let edadIntroducida = edad.includes("/"); //validación simple, no contempla letras en la edad

if (edadIntroducida){

    //Convertimos la fecha introducida en fecha local
    let fecha = new Date(edad);
    fecha = fecha.toLocaleDateString("es-ES")
    fecha = fecha.split(/\//g);

    //Convertimos la fecha actual en fecha local (JavaScript utiliza el formato americano)
    let hoy = new Date()
    hoy = hoy.toLocaleDateString("es-ES")
    hoy = hoy.split(/\//g)

    //Calculamos la diferencia entre las dos fechas	
    let edadActual = []

    for (let i = 0; i < hoy.length; i++) {
        edadActual.push(hoy[i] - fecha[i]);
    }
    
    //Comprobamos que los días y los meses no sean negativos, si lo son, aún no ha cumplido años este año
    if(edadActual[0] < 0 && edadActual[1] <= 0){
        //Restamos un año a la edad actual
        edadActual[2] = edadActual[2]-1    
    }

    //Si hay números negativos los pasamos a positivo
    for (let j = 0; j < edadActual.length; j++) {
        if (edadActual[j] < 0) {
            edadActual[j] = edadActual[j] * -1;
        }
        
    }
    if(edadActual[0] == 0 && edadActual[1] == 0){
        console.log('¡Felicidades, has cumplido ' + edadActual[2] + ' años!');
    }
    if(isNaN(edadActual[0]) || isNaN(edadActual[1]) || isNaN(edadActual[2])){
        console.log('La edad introducida no es válida');
    }
    else{
        //Mostramos edad actual
        console.log("Tu edad es: " + edadActual[0] + " días, " + edadActual[1] + " meses y " + edadActual[2] + " años")
    }
}else{
    console.log('debes introducir una fecha con formato mm/dd/aaaa');
}

