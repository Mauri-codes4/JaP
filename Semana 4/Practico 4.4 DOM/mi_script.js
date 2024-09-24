document.addEventListener('DOMContentLoaded', function () {

    let parrafoInfo = document.getElementById('info');
    
    let enlaces = document.getElementsByTagName('a');
    
    let numEnlaces = enlaces.length;
    parrafoInfo.innerHTML += "Número de enlaces de la página: " + numEnlaces + "<br>";

    let penultimoEnlace = enlaces[numEnlaces - 2].href;
    parrafoInfo.innerHTML += "Dirección del penúltimo enlace de la página: " + penultimoEnlace + "<br>";

    let numEnlacesPrueba = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href === "http://prueba/") {
            numEnlacesPrueba++;
        }
    }
    parrafoInfo.innerHTML += "Número de enlaces que apuntan a http://prueba/: " + numEnlacesPrueba + "<br>";

    let tercerParrafo = document.getElementsByTagName('p')[2];
    let enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');
    let numEnlacesTercerParrafo = enlacesTercerParrafo.length;
    parrafoInfo.innerHTML += "Número de enlaces del tercer párrafo: " + numEnlacesTercerParrafo + "<br>";
});