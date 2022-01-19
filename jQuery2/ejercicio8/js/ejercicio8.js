$('#boton1').click(function () {
    $form = $("<form></form>");
    $form.append('<input type="text" placeholder="Nombre">');
    $form.append('<input type="password" placeholder="Contraseña">');
    $('body').append($form);
})
$('#boton2').click(function () {
    alert($('form').html())
})

