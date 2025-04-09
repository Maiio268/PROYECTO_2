/* Para validar el formulario, primero vamos a seleccionar todos los elementos del formulario y vamos a asignarlos a variables, después crearé las funciones para validar cada cosa */
const formulario = document.querySelector(".formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const codigoPostal = document.getElementById("codigo_postal");
const genero = document.getElementById("genero");

// type: submit para indicar que el evento va a lanzarse cuando el formulario sea enviado
// le doy el nombre 'eventoFormulario' al parámetro que contiene el evento que se lanza cuando se envía el formulario
formulario.addEventListener("submit", (eventoFormulario) => {
    eventoFormulario.preventDefault(); // '.preventDefault()' se usa para detener el comportamiento predeterminado del evento, como el comportamiento determinado es que el formulario se envíe, ponemos esto para que primero tengan que pasar todas las validaciones


    /* Creo la variable del mensaje que va a salir para validar cada campo y la inicializo vacía */
    let mensajeValidacion = "";

    /* Ahora vamos a declarar condicionales para validar cada campo */
    /* Si se deja algún campo vacío, se concatena el mensaje específico de cada campo a la variable 'mensajeValidacion' */
    // Queremos acceder al contenido de cada campo, por lo que ponemos el nombre de cada campo seguido de .value
    if (nombre.value === "") {
        mensajeValidacion += "El nombre es obligatorio\n";
    }
    if (email.value === "") {
        mensajeValidacion += "El email es obligatorio\n";
    }
    if (telefono.value === "") {
        mensajeValidacion += "El teléfono es obligatorio\n";
    }
    if (direccion.value === "") {
        mensajeValidacion += "La dirección es obligatoria\n";
    }
    if (codigoPostal.value === "") {
        mensajeValidacion += "El Código postal es obligatorio\n";
    }
    if (genero.value === "") {
        mensajeValidacion += "El género es obligatorio\n";
    }
    /* Ahora vamos a especificar ciertas cosas obligatorias para cada campo del formulario */
    /* Si el teléfono no tiene 9 caracteres y alguno de los caracteres no es un número (he usado la función isNaN que significa 'Is Not A Number') */
    if (telefono.value.length !== 9 && isNaN(telefono.value)) {
        mensajeValidacion += "Por favor, introduce un teléfono válido\n";
    }
    if (codigoPostal.value.length !== 5 && isNaN(codigoPostal.value)) {
        mensajeValidacion += "Por favor, introduce un código postal válido\n"
    }

    // Si hay algún mensaje de validación, se muestra el mensaje con un 'alert' y no se envía el formulario, si no hay mensajes de validación se envía el formulario
    if (mensajeValidacion !== "") {
        alert(mensajeValidacion);
    }
    else {
        formulario.submit(); // Se envía el formulario
        alert("¡Formulario enviado correctamente!")
    }
});

