document.addEventListener("DOMContentLoaded", () => {
    // Primero vamos a crear todos los elementos necesarios HTML
    // Creamos el contenedor div, la entrada donde el usuario introduce la URL de la imagen que quiere añadir, el botón para agregar la imagen y el contenedor div en donde van a aparecer las imágenes
        const divPrincipal = document.createElement("div");
        divPrincipal.classList.add("contenedorPrincipal");

        const entradaUrl = document.createElement("input");
        entradaUrl.classList.add("inputURL"); // Creamos el nombre de la clase
        entradaUrl.placeholder = "Introduce la dirección de la imagen"; // Creamos un placeholder que es el texto que va a aparecer dentro del input para que el usuario sepa qué tiene que introducir

        const botonAgregar = document.createElement("button");
        botonAgregar.classList.add("botonAgregar"); // Creamos el nombre de la clase
        botonAgregar.textContent = "Agregar Imagen"; // Contenido de dentro del botón
    // Evento del botón
    // Si se hace click en el botón, se llama a la función 'agregarImagen'
        botonAgregar.addEventListener("click", agregarImagen);

        const textoInfo = document.createElement("p");
        textoInfo.classList.add("textoInfo");
        textoInfo.textContent = "*Para eliminar una imagen, haz doble click en ella*";

        const divSecundario = document.createElement("div");
        divSecundario.classList.add("contenedorSecundario");

    // Ahora ponemos dentro del contenedor principal todos los elementos creados y se los añadimos como hijos
        divPrincipal.appendChild(entradaUrl);
        divPrincipal.appendChild(botonAgregar);
        divPrincipal.appendChild(divSecundario);
        divPrincipal.appendChild(textoInfo);

    // Creamos la función que agrega la imagen en la galería
        function agregarImagen() {
            const inputCorregido = entradaUrl.value.trim(); // trim() se usa para eliminar los espacios en blanco si el usuario introduce la URL y tiene algún espacio en blanco se va a eliminar para que no haya ningñun tipo de problema
            if (inputCorregido) { // Condicional que dice que si existe el 'inputCorregido', se hace lo siguiente
                const imagen = document.createElement("img");
                imagen.setAttribute("src", inputCorregido);
                imagen.setAttribute("alt", "Imagen");
                // Se añade la imagen al contenedor secundario
                divSecundario.appendChild(imagen);

                // Iba a crear un botón "Eliminar imagen", pero no sabía como hacer para borrar una imagen específica, entonces he decidido crear un evento que hace que cuando se haga doble click en una imagen ésta se elimine, así se pueden borrar las imágenes deseadas fácilmente
                // Si se hace doble click en una imagen, se elimina
                imagen.addEventListener('dblclick', () => {
                    divSecundario.removeChild(imagen);
                });
                // Y por último se elimina la URL introducida para que el input esté en blanco a la hora de introducir otra nueva
                entradaUrl.value = ""
            }
        }

    // Insertamos el divPrincipal justo después del título de la galería
    // Seleccionamos el título de la galería y con '.insertAdjacentElement()' añadimos el divPrincipal
        document.querySelector('.titulo_galeria_interactiva').insertAdjacentElement('afterend', divPrincipal);

    // Estilos del contenedor, botón... Para centrarlos, separarlos...
        divPrincipal.style.display = "flex";
        divPrincipal.style.flexDirection = "column";
        divPrincipal.style.justifyContent = "center";
        divPrincipal.style.alignItems = "center";
        divPrincipal.style.gap = "0.3rem";

        botonAgregar.style.backgroundColor = "#395b50";

    // Para separar más el título y el divPrincipal
        document.querySelector('.titulo_galeria_interactiva').style.marginBottom = '1rem';

    // Quiero que cada vez que agrege una imagen aparezcan en columna, centradas y una debajo de otra, no que cada vez que añadop una se pone a la derecha, además, le añado espacio entre cada imagen
        divSecundario.style.display = "flex";
        divSecundario.style.flexDirection = "column";
        divSecundario.style.gap = "1rem";
});