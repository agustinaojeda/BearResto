//carrusel

const imagenes = new Array();
imagenes[0] = document.getElementById('uno');
imagenes[1] = document.getElementById('dos');
imagenes[2] = document.getElementById('tres');
imagenes[3] = document.getElementById('cuatro');
imagenes[4] = document.getElementById('cinco');

let derecha = document.getElementById('der');
let izquierda = document.getElementById('izq');

let contador = 0;
let i = 0;

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

//validacion de formulario

function enviar() {
    if (validar() == true) {
        let nombre = document.getElementById('nombre');
        let telefono = document.getElementById('telefono');
        let email = document.getElementById('email');
        let personas = document.getElementById('cant');
        let fecha = document.getElementById('fecha');
        let hora = document.getElementById('hora');
        let mensaje = document.createElement("li");

        mensaje.innerHTML = `¡Gracias ${nombre.value}! Nos comunicaremos al ${telefono.value} para confirmar tu reserva.`;
        document.getElementById('mensaje').appendChild(mensaje);

        nombre.value = "";
        telefono.value = "";
        email.value = "";
        personas.value = "";
        fecha.value = "";
        hora.value = 0;
    }
    return false;
}

function incorrecto(elemento) {
    elemento.style.border = "2.5px solid #d70000be";
    elemento.value = "";
    elemento.focus();
}

function validar() {
    let nombre = document.getElementById('nombre');
    let telefono = document.getElementById('telefono');
    let email = document.getElementById('email');
    let personas = document.getElementById('cant');
    let fecha = document.getElementById('fecha');
    let hora = document.getElementById('hora');
    let errores = [];
    let envio = true;

    let inputs = document.querySelectorAll("input, select");
    for (i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "2px inset #ff6183b9";
    }

    if (hora.value == 0) {
        incorrecto(hora);
        errores.push("Recuerde seleccionar una hora.");
        envio = false;
    }

    if (fecha.value == "") {
        incorrecto(fecha);
        errores.push("Recuerde seleccionar una fecha.")
        envio = false;
    }

    if (personas.value.trim() == "" || isNaN(personas.value)) {
        incorrecto(personas);
        errores.push("Recuerde ingresar la cantidad de personas.");
        envio = false;
    } else if (personas.value < 1) {
        incorrecto(personas);
        errores.push("La cantidad de personas no puede ser menor a uno.");
        envio = false;
    } else if (personas.value > 30) {
        incorrecto(personas);
        errores.push("La cantidad de personas no puede ser mayor a treinta.");
        envio = false;
    }

    let comprobacionEmail = /\S+@\S+\.\S+/;
    if (email.value.trim() != "") {
        if (!comprobacionEmail.test(email.value)) {
            incorrecto(email);
            errores.push("Debe ser un email válido.");
            envio = false;
        }
    }

    if (telefono.value.trim() == "" || isNaN(telefono.value)) {
        incorrecto(telefono);
        errores.push("Recuerde escribir su número de teléfono.");
        envio = false;
    } else if (telefono.value.length < 6 || telefono.value.length > 20) {
        incorrecto(telefono);
        errores.push("Debe ser un número de teléfono válido.");
        envio = false;
    }

    if (nombre.value.trim() == "" || !isNaN(nombre.value)) {
        incorrecto(nombre);
        errores.push("Recuerde escribir su nombre.");
        envio = false;
    }

    let ltaErrores = document.getElementById('listaErrores');
    ltaErrores.innerHTML = "";
    errores.forEach(e => {
        let li = document.createElement("li");
        li.innerHTML = e;
        ltaErrores.appendChild(li);
        console.log(e);
    })

    return envio;
}