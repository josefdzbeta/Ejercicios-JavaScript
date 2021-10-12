let nota=prompt('Introduce una nota')

if(nota>=0 && nota<=3){
    document.write('muy deficiente')
}else if(nota>=3 && nota<=5){
    document.write('insuficiente')
}else if(nota>=5 && nota <=6){
    document.write('Suficiente')
}else if(nota>=6 && nota <=7){
    document.write('Bien')
}else if(nota>=7 && nota <=9){
    document.write('Notable')
}else if(nota>=7 && nota <=10){
    document.write('Sobresaliente')
}else{
    document.write('Introduce una nota válida')
}