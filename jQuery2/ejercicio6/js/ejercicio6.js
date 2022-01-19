$('#boton1').click(function () {
   $('table').attr('border', '1')
})
$('#boton2').click(function () {
    alert($('table').attr('border'))
})
$('#boton3').click(function () {
    $('table').removeAttr('border')
})

