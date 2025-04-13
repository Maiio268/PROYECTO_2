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
    function setError(input, message) {
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

    function clearError(input) {
        let errorElem = input.nextElementSibling;
        if (errorElem && errorElem.classList.contains("error-message")) {
            errorElem.textContent = "";
        }
    }

    // ---------- Validación en tiempo real para cada campo ----------
    nombre.addEventListener("input", () => {
        if (nombre.value.trim() === "") {
            setError(nombre, "El nombre es obligatorio");
        } else {
            clearError(nombre);
        }
    });

    email.addEventListener("input", () => {
        if (email.value.trim() === "") {
            setError(email, "El email es obligatorio");
        } else {
            clearError(email);
        }
    });

    telefono.addEventListener("input", () => {
        if (telefono.value.trim() === "") {
            setError(telefono, "El teléfono es obligatorio");
        } else if (telefono.value.trim().length !== 9 || isNaN(telefono.value.trim())) {
            setError(telefono, "Por favor, introduce un teléfono válido");
        } else {
            clearError(telefono);
        }
    });

    direccion.addEventListener("input", () => {
        if (direccion.value.trim() === "") {
            setError(direccion, "La dirección es obligatoria");
        } else {
            clearError(direccion);
        }
    });

    codigoPostal.addEventListener("input", () => {
        if (codigoPostal.value.trim() === "") {
            setError(codigoPostal, "El Código postal es obligatorio");
        } else if (codigoPostal.value.trim().length !== 5 || isNaN(codigoPostal.value.trim())) {
            setError(codigoPostal, "Por favor, introduce un código postal válido");
        } else {
            clearError(codigoPostal);
        }
    });

    genero.addEventListener("change", () => {
        if (genero.value === "") {
            setError(genero, "El género es obligatorio");
        } else {
            clearError(genero);
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
        // Si hay mensajes de validación, se previene la función por defecto del formulario, que es el submit, es decir, que se entregue
        else
            formulario.preventDefault()
    });
});
