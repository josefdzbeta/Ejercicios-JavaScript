let frase=prompt('introduce una frase')
let contadorA, contadorE, contadorI, contadorO, contadorU

for(let i=0; i<frase.length;i++){

    if(frase.charAt(i)=='a'){
        contadorA++ 
    }
    if( frase.charAt(i)=='e'){
        contadorE++
    }
    if(frase.charAt(i)=='i'){
        contadorI++
    }
    if(  frase.charAt(i)=='o'){
        contadorO++
    }
    if (frase.charAt(i)=='u' ){
        contadorU++
    }
}
document.write('A:'+contadorA)
document.write('E:'+contadorE)
document.write('I:'+contadorI)
document.write('O:'+contadorO)
document.write('U:'+contadorU)