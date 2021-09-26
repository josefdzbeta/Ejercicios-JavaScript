let numero1 = prompt('introduce un numero')
let numero2 = prompt('introduce otro numero')
let numero3= prompt('introduce un tercer numero')
let mayor=0

if(numero1>numero2 && numero2>numero3){
    mayor=numero1
}
if(numero2>numero1 && numero1>numero3){
    
    mayor=numero2
}
if(numero3>numero2 && numero2>numero1){
    mayor=numero3
}

document.write('el mayor es '+mayor)