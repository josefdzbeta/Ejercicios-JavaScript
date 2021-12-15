'use strict'

let texto = prompt('Introduce un texto').toLowerCase()

//A
console.log(texto.substring(0,texto.length/2)) 

//B 
console.log(texto.charAt(texto.length -1))

//C
console.log(texto.split("").reverse().join("")) 

//D
console.log(texto.split("").join("-")) 

//E

let vocales=0
for (let i = 0; i < texto.length; i++) {
    
    if(texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i'|| texto.charAt(i) == 'o' || texto.charAt(i) == 'u'){
        vocales++
    }
    
}
console.log(`numero de vocales ${vocales}`)