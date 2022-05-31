let numero1 = prompt('introduce un numero')
let numero2 = prompt('introduce otro numero')
let mayor=0

if(numero1>numero2){
    mayor=numero1
}else{
    if(numero1==numero2){
        document.write('los dos son iguales')
    }else{
        mayor=numero2
    }
}
document.write('el mayor es '+mayor)