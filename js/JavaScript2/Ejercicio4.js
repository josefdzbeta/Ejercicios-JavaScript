let suma = 0;
do {
    let numeros = prompt('Introduce un numero')

    if (Number(numeros) == numeros) {

        suma = suma + numeros

    } else if (numeros != undefined) {

        alert('No has introducido un numero')

    }

} while (numeros != undefined)

document.write(suma)