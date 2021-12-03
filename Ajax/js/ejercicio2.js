/**
 *   Ejercicios de AJAX
 *   @author Jose Angel Betancourt 
 *   @license GPL-3.0-or-later
 *
 */
 'use strict'
function cargarFichero3(){
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      console.log(this.readyState, this.status)
      if (this.readyState == 4 && this.status == 200)
        document.getElementById('span1').innerHTML = this.responseText
    }
    xhttp.open('GET', 'https://api.tutiempo.net/xml/?lan=es&apid=axYXXzXaza4B850&lid=7414', true)
    xhttp.send()
}
