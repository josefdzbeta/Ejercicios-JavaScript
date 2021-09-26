let numeroDisivible=prompt('introduce un numero')

if(numeroDisivible%2==0 || numeroDisivible%3==0 || numeroDisivible%5==0 || numeroDisivible%7==0){
    document.write('el numero introducido es divisible por 2,3,5 o 7')
}else{
    document.write('el numero no es divisible por 2,3,5,7')
}