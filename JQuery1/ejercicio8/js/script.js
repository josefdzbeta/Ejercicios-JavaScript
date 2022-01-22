$('button:eq(0)').click(function(){
    if($('a:eq(0)').attr('target')== "_blank"){
        $('a:eq(0)').hide()
    }
})
$("button:eq(1)").click(function(){
    if($('a:eq(1)').attr('target')=="_self"){
        $('a:eq(1)').hide()
    }
})
