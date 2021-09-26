let numero=prompt('Introduce un numero')
let primo=0

for (let i=1; i<=numero; i++){

    if(numero%i==0){
        primo++
    }

}

if (primo==2){
    document.write('el numero introducido es primo')
}else{
    document.write('el numero introducido no es primo')
}
