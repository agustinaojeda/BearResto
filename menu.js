var entradas = document.getElementById('entradas');
var sushi = document.getElementById('sushi');
var mariscos = document.getElementById('mariscos');
var sushiitems = document.getElementById('sushiitems');
var entradasitems = document.getElementById('entradasitems');
var mariscositems = document.getElementById('mariscositems');

entradas.onclick = function() {
    entradas.classList.add("active");
    sushi.classList.remove("active");
    mariscos.classList.remove("active");

    entradasitems.classList.add("cartaactiva");
    entradasitems.classList.remove("carta");
    sushiitems.classList.remove("cartaactiva");
    sushiitems.classList.add("carta");
    mariscositems.classList.remove("cartaactiva");
    mariscositems.classList.add("carta");
}

sushi.onclick = function() {
    sushi.classList.add("active");
    entradas.classList.remove("active");
    mariscos.classList.remove("active");

    entradasitems.classList.remove("cartaactiva");
    entradasitems.classList.add("carta");
    sushiitems.classList.add("cartaactiva");
    sushiitems.classList.remove("carta");
    mariscositems.classList.remove("cartaactiva");
    mariscositems.classList.add("carta");
}

mariscos.onclick = function() {
    mariscos.classList.add("active");
    sushi.classList.remove("active");
    entradas.classList.remove("active");

    entradasitems.classList.remove("cartaactiva");
    entradasitems.classList.add("carta");
    sushiitems.classList.remove("cartaactiva");
    sushiitems.classList.add("carta");
    mariscositems.classList.add("cartaactiva");
    mariscositems.classList.remove("carta");
}