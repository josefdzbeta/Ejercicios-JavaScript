let frase=prompt('introduce una frase')
let contador=0

for(let i=0; i<frase.length;i++){
    if(frase.charAt(i)=='a'){
        contador++
    }
}
document.write('el numero de A que aparecen es '+contador)