let numero1=prompt('introduce un numero')
let numero2=prompt('introduce otro numero')

for(let i=0; i<numero2;i++){

    if(numero1%i==0 && numero2%i==0){
        document.write('Los numeros divisibles comunes son'+i+',')
    }
}