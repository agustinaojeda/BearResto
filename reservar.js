//carrusel

const imagenes = new Array();
imagenes[0] = document.getElementById('uno');
imagenes[1] = document.getElementById('dos');
imagenes[2] = document.getElementById('tres');
imagenes[3] = document.getElementById('cuatro');
imagenes[4] = document.getElementById('cinco');

var derecha = document.getElementById('der');
var izquierda = document.getElementById('izq');

var contador = 0;
var i = 0;

derecha.onclick = function() {
    contador++;

    if (contador == imagenes.length) {
        contador = 0;
    }

    for (i = 0; i < imagenes.length; i++) {
        imagenes[i].classList.add("oculto");
    }
    imagenes[contador].classList.remove("oculto");

}

izquierda.onclick = function izqui() {
    contador--;

    if (contador < 0) {
        contador = imagenes.length - 1;
    }

    for (i = 0; i < imagenes.length; i++) {
        imagenes[i].classList.add("oculto");
    }

    imagenes[contador].classList.remove("oculto");
}