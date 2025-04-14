document.addEventListener("DOMContentLoaded", () => {
    /* Para validar el formulario, primero vamos a seleccionar todos los elementos del formulario y vamos a asignarlos a variables, después crearé las funciones para validar cada cosa */
    const formulario = document.querySelector(".formulario");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("codigo_postal");
    const genero = document.getElementById("genero");

    // ---------- Funciones para mostrar y limpiar mensajes de error en tiempo real ----------
    function mostrarMensajesValidacion(input, message) {
        // Verifica si ya existe un elemento para mostrar el error justo debajo del input
        let errorElem = input.nextElementSibling;
        if (!errorElem || !errorElem.classList.contains("error-message")) {
            errorElem = document.createElement("span");
            errorElem.classList.add("error-message");
            errorElem.style.color = "red";
            errorElem.style.fontSize = "0.9rem";
            // Inserta el mensaje justo después del input
            input.parentNode.insertBefore(errorElem, input.nextSibling);
        }
        errorElem.textContent = message;
    }

    function BorrarMensajeValidacion(input) {
        let errorElem = input.nextElementSibling;
        if (errorElem && errorElem.classList.contains("error-message")) {
            errorElem.textContent = "";
        }
    }

    // ---------- Validación en tiempo real para cada campo ----------
    nombre.addEventListener("input", () => {
        if (nombre.value.trim() === "") {
            mostrarMensajesValidacion(nombre, "El nombre es obligatorio");
        } else {
            BorrarMensajeValidacion(nombre);
        }
    });

    email.addEventListener("input", () => {
        if (email.value.trim() === "") {
            mostrarMensajesValidacion(email, "El email es obligatorio");
        } else {
            BorrarMensajeValidacion(email);
        }
    });

    telefono.addEventListener("input", () => {
        if (telefono.value.trim() === "") {
            mostrarMensajesValidacion(telefono, "El teléfono es obligatorio");
        } else if (telefono.value.trim().length !== 9 || isNaN(telefono.value.trim())) {
            mostrarMensajesValidacion(telefono, "Por favor, introduce un teléfono válido");
        } else {
            BorrarMensajeValidacion(telefono);
        }
    });

    direccion.addEventListener("input", () => {
        if (direccion.value.trim() === "") {
            mostrarMensajesValidacion(direccion, "La dirección es obligatoria");
        } else {
            BorrarMensajeValidacion(direccion);
        }
    });

    codigoPostal.addEventListener("input", () => {
        if (codigoPostal.value.trim() === "") {
            mostrarMensajesValidacion(codigoPostal, "El Código postal es obligatorio");
        } else if (codigoPostal.value.trim().length !== 5 || isNaN(codigoPostal.value.trim())) {
            mostrarMensajesValidacion(codigoPostal, "Por favor, introduce un código postal válido");
        } else {
            BorrarMensajeValidacion(codigoPostal);
        }
    });

    genero.addEventListener("change", () => {
        if (genero.value === "") {
            mostrarMensajesValidacion(genero, "El género es obligatorio");
        } else {
            BorrarMensajeValidacion(genero);
        }
    });

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

        // Si no hay mensajes de validación, se envía el formulario; si hay errores, no se envía
        if (mensajeValidacion === "") {
            formulario.submit(); // Se envía el formulario
        }

    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Primero, seleccionamos todos los elementos del formulario y los asignamos a variables
    const formulario = document.querySelector(".formulario");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("codigo_postal");
    const genero = document.getElementById("genero");

    // ---------- Funciones para mostrar y limpiar mensajes de error en tiempo real ----------

    // Función para mostrar un mensaje de error justo debajo del input
    function mostrarMensajesValidacion(input, message) {
        // Se comprueba si ya existe un elemento para el error justo después del input
        let errorElem = input.nextElementSibling;
        // Si no existe o no tiene la clase "error-message", se crea un nuevo span
        if (!errorElem || !errorElem.classList.contains("error-message")) {
            errorElem = document.createElement("span");
            errorElem.classList.add("error-message");
            errorElem.style.color = "red";
            errorElem.style.fontSize = "0.9rem";
            // Insertamos el span del error justo después del input
            input.parentNode.insertBefore(errorElem, input.nextSibling);
        }
        // Se asigna el mensaje de error al span
        errorElem.textContent = message;
    }

    // Función para borrar (limpiar) el mensaje de error del input
    function borrarMensajeValidacion(input) {
        let errorElem = input.nextElementSibling;
        // Se comprueba que el siguiente elemento exista y tenga la clase "error-message"
        if (errorElem && errorElem.classList.contains("error-message")) {
            errorElem.textContent = "";
        }
    }

    // ---------- Validación en tiempo real para cada campo del formulario ----------

    // Validación del campo "Nombre"
    nombre.addEventListener("input", () => {
        if (nombre.value.trim() === "") {
            mostrarMensajesValidacion(nombre, "El nombre es obligatorio");
        } else {
            borrarMensajeValidacion(nombre);
        }
    });

    // Validación del campo "Email"
    email.addEventListener("input", () => {
        if (email.value.trim() === "") {
            mostrarMensajesValidacion(email, "El email es obligatorio");
        } else {
            borrarMensajeValidacion(email);
        }
    });

    // Validación del campo "Teléfono"
    telefono.addEventListener("input", () => {
        if (telefono.value.trim() === "") {
            mostrarMensajesValidacion(telefono, "El teléfono es obligatorio");
        } else if (telefono.value.trim().length !== 9 || isNaN(telefono.value.trim())) {
            mostrarMensajesValidacion(telefono, "Por favor, introduce un teléfono válido");
        } else {
            borrarMensajeValidacion(telefono);
        }
    });

    // Validación del campo "Dirección"
    direccion.addEventListener("input", () => {
        if (direccion.value.trim() === "") {
            mostrarMensajesValidacion(direccion, "La dirección es obligatoria");
        } else {
            borrarMensajeValidacion(direccion);
        }
    });

    // Validación del campo "Código Postal"
    codigoPostal.addEventListener("input", () => {
        if (codigoPostal.value.trim() === "") {
            mostrarMensajesValidacion(codigoPostal, "El código postal es obligatorio");
        } else if (codigoPostal.value.trim().length !== 5 || isNaN(codigoPostal.value.trim())) {
            mostrarMensajesValidacion(codigoPostal, "Por favor, introduce un código postal válido");
        } else {
            borrarMensajeValidacion(codigoPostal);
        }
    });

    // Validación del campo "Género" (select)
    genero.addEventListener("change", () => {
        if (genero.value === "") {
            mostrarMensajesValidacion(genero, "El género es obligatorio");
        } else {
            borrarMensajeValidacion(genero);
        }
    });

    // Se asigna el evento "submit" para validar todos los campos al enviar el formulario
    formulario.addEventListener("submit", (eventoFormulario) => {
        // Prevenimos el envío por defecto para validar primero todos los campos
        eventoFormulario.preventDefault();

        // Declaramos una variable para acumular los mensajes de validación en caso de error
        let mensajeValidacion = "";

        // Validamos que ningún campo esté vacío, si alguno está vacío se concatena el mensaje a la constante "mensajeValidacion"
        if (nombre.value.trim() === "") {
            mensajeValidacion += "El nombre es obligatorio\n";
        }
        if (email.value.trim() === "") {
            mensajeValidacion += "El email es obligatorio\n";
        }
        if (telefono.value.trim() === "") {
            mensajeValidacion += "El teléfono es obligatorio\n";
        }
        if (direccion.value.trim() === "") {
            mensajeValidacion += "La dirección es obligatoria\n";
        }
        if (codigoPostal.value.trim() === "") {
            mensajeValidacion += "El código postal es obligatorio\n";
        }
        if (genero.value === "") {
            mensajeValidacion += "El género es obligatorio\n";
        }

        // Validación adicional para el formato del teléfono (9 dígitos numéricos)
        if (telefono.value.trim() !== "" && (telefono.value.trim().length !== 9 || isNaN(telefono.value.trim()))) {
            mensajeValidacion += "Por favor, introduce un teléfono válido\n";
        }
        // Validación adicional para el formato del código postal (5 dígitos numéricos)
        if (codigoPostal.value.trim() !== "" && (codigoPostal.value.trim().length !== 5 || isNaN(codigoPostal.value.trim()))) {
            mensajeValidacion += "Por favor, introduce un código postal válido\n";
        }

        // Si no hay mensajes de validación, se envía el formulario
        if (mensajeValidacion === "") {
            formulario.submit();
        }
        // Si hay mensajes de validación, se previene la función por defecto del formulario, que es el submit, es decir, que se entregue
        else
            formulario.preventDefault()
    });
});

