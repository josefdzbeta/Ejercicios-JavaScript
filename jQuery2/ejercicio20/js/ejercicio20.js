$("button").click(function(){  
    $.each($("p"),function(){  
     if((this.textContent.length)>100){  
      $(this).css("background-color","yellow");  
     }  
    }) 
});  


