$('#hola').click(cambiaHola)

function cambiaHola() {
    $('#hola').css(
        {'background-color':'blue', 
        'font-family':'Verdana', 
        'color':'yellow'})
}

$('#adios').click(cambiaAdios)

function cambiaAdios() {
    $('#adios').css(
        {'background-color':'pink', 
        'font-family':'Verdana', 
        'color':'green'})
}


