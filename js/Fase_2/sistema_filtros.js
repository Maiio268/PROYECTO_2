/* Primero vamos a crear un array con todos los nombres de las marcas */
const array_marcas = ["Lamborghini", "Bugatti", "Aston Martin", "Pagani", "Ferrari", "Maserati"];

/* Vamos a crear el contenedor donde van a estar los 6 botones que filtren por marcas los coches */
const contenedor_botones = document.createElement('div');
contenedor_botones.classList.add('contenedor_filtro');

/* Establecemos el estilo para centrar los botones desde JS */
contenedor_botones.style.display = 'flex';
contenedor_botones.style.flexDirection = 'column';
contenedor_botones.style.alignItems = 'center';
contenedor_botones.style.gap = '1rem'; // Le añado espacio a los elementos hijos del contenedor,es decir, a los botones
contenedor_botones.style.marginTop = '2rem'; // Espacio entre el título y los botones

/* Ponemos el nombre del array donde están las marcas con .forEach para recorrer cada elemento del array */
/* Vamos a crear botones para CADA marca del array */
array_marcas.forEach(element => {
    const boton_filtro = document.createElement('button');
    boton_filtro.classList.add('boton_filtro');
    boton_filtro.textContent = element; // Establece el texto del botón con el nombre de la marca

    // Le añadimos el evento al botón para filtrar los productos
    boton_filtro.addEventListener('click', () => {
        filtrarProductosPorMarca(element); // Filtra los productos según la marca seleccionada
    });

    // Agregamos el botón al contenedor
    contenedor_botones.appendChild(boton_filtro);
});

/* Añadimos el contenedor con los botones justo después del encabezado */
document.querySelector('.titulo_productos_disponibles').insertAdjacentElement('afterend', contenedor_botones);

/* Vamos a declarar los estilos de CADA botón */
document.querySelectorAll('.boton_filtro').forEach(boton => {
    boton.style.padding = '10px 20px';
    boton.style.backgroundColor = '#395b50';
    boton.style.color = '#c5d1eb';
    boton.style.border = 'black';
    boton.style.borderRadius = '1rem';
    boton.style.cursor = 'pointer';
    boton.style.fontSize = '1rem';
});

/* Creamos la función 'filtrarProductosPorMarca' que filtra los productos por la marca seleccionada */
function filtrarProductosPorMarca(marcaSeleccionada) {
    /* Primero seleccionamos TODOS los artículos de los productos */
    const productos = document.querySelectorAll('.productos_article'); // Selecciona todos los productos

    productos.forEach(producto => {
        // La variable 'marcaProducto' va a contener la marca de cada producto cogiendo el atributo 'data-marca'
        const marcaProducto = producto.getAttribute('data-marca');

        // Mostrar u ocultar el producto según si la marca coincide con la seleccionada
        if (marcaProducto && marcaProducto.toLowerCase() === marcaSeleccionada.toLowerCase()) {
            producto.style.display = 'block'; // Mostrar el producto si la marca coincide
        } else {
            producto.style.display = 'none'; // Ocultar el producto si la marca no coincide
        }
    });
}

/* Asignar las marcas a los productos desde JS (lo que no puedes modificar en HTML) */
document.querySelectorAll('.productos_article').forEach((producto) => {
    if (producto.querySelector('.titulito_producto')) {
        const tituloProducto = producto.querySelector('.titulito_producto').textContent.trim();

        // Asignar la marca al producto según el título
        if (tituloProducto.includes("Lamborghini")) {
            producto.setAttribute('data-marca', "Lamborghini");
        } else if (tituloProducto.includes("Bugatti")) {
            producto.setAttribute('data-marca', "Bugatti");
        } else if (tituloProducto.includes("Aston Martin")) {
            producto.setAttribute('data-marca', "Aston Martin");
        } else if (tituloProducto.includes("Pagani")) {
            producto.setAttribute('data-marca', "Pagani");
        } else if (tituloProducto.includes("Ferrari")) {
            producto.setAttribute('data-marca', "Ferrari");
        } else if (tituloProducto.includes("Maserati")) {
            producto.setAttribute('data-marca', "Maserati");
        }
    }
});
