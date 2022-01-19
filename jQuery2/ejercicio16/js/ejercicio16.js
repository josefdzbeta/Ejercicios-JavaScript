$('button').click(function () {
    $('ul').css("background-color", "red")
})
$('ul').dblclick(function () {
    $(this).hide()
})
$(document).keydown(function () {
    $('ul').hide()
})




