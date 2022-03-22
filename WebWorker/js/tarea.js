
function workerApi(){

    let numeroRandom = Math.floor(Math.random()*100);

    //console.log(numeroRandom);

    fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
        .then(response => response.text())
        .then(data => postMessage(data));

}
setInterval(workerApi,30000)
