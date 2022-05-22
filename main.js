var opiniones = document.getElementById('opiniones');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');

control1.onclick = function() {
    opiniones.style.transform = "translateX(870px)";
    control1.classList.add("activo");
    control2.classList.remove("activo");
    control3.classList.remove("activo");
}

control2.onclick = function() {
    opiniones.style.transform = "translateX(0px)";
    control2.classList.add("activo");
    control1.classList.remove("activo");
    control3.classList.remove("activo");
}

control3.onclick = function() {
    opiniones.style.transform = "translateX(-870px)";
    control3.classList.add("activo");
    control2.classList.remove("activo");
    control1.classList.remove("activo");
}