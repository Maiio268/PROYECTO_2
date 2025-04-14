document.addEventListener("DOMContentLoaded", () => {
    // Primero, creamos constantes y seleccionamos los campos del formulario para asignarlos a esas variables
    const formulario = document.querySelector(".formulario");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("codigo_postal");
    const genero = document.getElementById("genero");

    // Creamos una función para mostrar el mensaje de error de validación debajo de cada input
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

    // Función para borrar (limpiar) el mensaje de error de validación del input
    function borrarMensajeValidacion(input) {
        let errorElem = input.nextElementSibling;
        // Se comprueba que el siguiente elemento exista y tenga la clase "error-message"
        if (errorElem && errorElem.classList.contains("error-message")) {
            errorElem.textContent = "";
        }
    }

    // Validación específica del campo "Nombre"
    nombre.addEventListener("input", () => {
        if (nombre.value.trim() === "") {
            mostrarMensajesValidacion(nombre, "El nombre es obligatorio");
        } else {
            borrarMensajeValidacion(nombre);
        }
    });

    // Validación específica del campo "Email"
    email.addEventListener("input", () => {
        if (email.value.trim() === "") {
            mostrarMensajesValidacion(email, "El email es obligatorio");
        } else {
            borrarMensajeValidacion(email);
        }
    });

    // Validación específica del campo "Teléfono"
    telefono.addEventListener("input", () => {
        if (telefono.value.trim() === "") {
            mostrarMensajesValidacion(telefono, "El teléfono es obligatorio");
        } else if (telefono.value.trim().length !== 9 || isNaN(telefono.value.trim())) {
            mostrarMensajesValidacion(telefono, "Por favor, introduce un teléfono válido");
        } else {
            borrarMensajeValidacion(telefono);
        }
    });

    // Validación específica del campo "Dirección"
    direccion.addEventListener("input", () => {
        if (direccion.value.trim() === "") {
            mostrarMensajesValidacion(direccion, "La dirección es obligatoria");
        } else {
            borrarMensajeValidacion(direccion);
        }
    });

    // Validación específica del campo "Código Postal"
    codigoPostal.addEventListener("input", () => {
        if (codigoPostal.value.trim() === "") {
            mostrarMensajesValidacion(codigoPostal, "El código postal es obligatorio");
        } else if (codigoPostal.value.trim().length !== 5 || isNaN(codigoPostal.value.trim())) {
            mostrarMensajesValidacion(codigoPostal, "Por favor, introduce un código postal válido");
        } else {
            borrarMensajeValidacion(codigoPostal);
        }
    });

    // Validación específica del campo "Género"
    genero.addEventListener("change", () => {
        if (genero.value === "") {
            mostrarMensajesValidacion(genero, "El género es obligatorio");
        } else {
            borrarMensajeValidacion(genero);
        }
    });

    // Al validar los campos usamos trim() para eliminar los espacios en blanco, también usamos la variable 'validacionCorrecta' para permitir que se muestren o no los mensajes
    // Evento "submit" para validar todos los campos al enviar el formulario
    formulario.addEventListener("submit", (eventoFormulario) => {
        // Prevenimos el envío por defecto para poder validar todos los campos primero
        eventoFormulario.preventDefault();

        // Creo una variable y la inicializo como 'True'
        let validacionCorrecta = true;

        // Validación específica del campo "Nombre"
        if (nombre.value.trim() === "") {
            mostrarMensajesValidacion(nombre, "El nombre es obligatorio");
            validacionCorrecta = false;
        } else {
            borrarMensajeValidacion(nombre);
        }

        // Validación específica del campo "Email"
        if (email.value.trim() === "") {
            mostrarMensajesValidacion(email, "El email es obligatorio");
            validacionCorrecta = false;
        } else {
            borrarMensajeValidacion(email);
        }

        // Validación específica del campo "Teléfono"
        if (telefono.value.trim() === "") {
            mostrarMensajesValidacion(telefono, "El teléfono es obligatorio");
            validacionCorrecta = false;
        } else if (telefono.value.trim().length !== 9 || isNaN(telefono.value.trim())) {
            mostrarMensajesValidacion(telefono, "Por favor, introduce un teléfono válido");
            validacionCorrecta = false;
        } else {
            borrarMensajeValidacion(telefono);
        }

        // Validación específica del campo "Dirección"
        if (direccion.value.trim() === "") {
            mostrarMensajesValidacion(direccion, "La dirección es obligatoria");
            validacionCorrecta = false;
        } else {
            borrarMensajeValidacion(direccion);
        }

        // Validación específica del campo "Código Postal"
        if (codigoPostal.value.trim() === "") {
            mostrarMensajesValidacion(codigoPostal, "El código postal es obligatorio");
            validacionCorrecta = false;
        } else if (codigoPostal.value.trim().length !== 5 || isNaN(codigoPostal.value.trim())) {
            mostrarMensajesValidacion(codigoPostal, "Por favor, introduce un código postal válido");
            validacionCorrecta = false;
        } else {
            borrarMensajeValidacion(codigoPostal);
        }

        // Validación específica del campo "Género"
        if (genero.value === "") {
            mostrarMensajesValidacion(genero, "El género es obligatorio");
            validacionCorrecta = false;
        } else {
            borrarMensajeValidacion(genero);
        }

        // Si la validación es correcta en todos los campos, se envía el formulario
        if (validacionCorrecta) {
            formulario.submit();
        }
        // Si hay alguna validación errónea en algún campo, se previene que el formulario se envíe
        else
            formulario.preventDefault()
    });
});
