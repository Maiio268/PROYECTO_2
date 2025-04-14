document.addEventListener("DOMContentLoaded", () => {
    // Creamos la constante y seleccionamos el botón de "Comprar"
    const botonComprar = document.querySelectorAll('.boton_producto');
    // Comprobamos si existen botones de compra
    if (botonComprar.length > 0) {
        // Recorremos CADA cada botón de "Comprar"
        botonComprar.forEach(button => {
            // Le asignamos el evento de tipo "click" a CADA botón
            button.addEventListener("click", (e) => {
                e.preventDefault(); // Evitamos la acción por defecto del enlace
                // Obtenemos el contenedor del artículo de producto correspondiente
                const productArticle = button.closest('.productos_article');
                if (productArticle) {
                    // Creamos constantes para los atributos del producto
                    const nombreProducto = productArticle.querySelector('.titulito_producto').textContent.trim();
                    const precioProducto = productArticle.querySelector('.div_producto p').textContent.trim();
                    const imagenProducto = productArticle.querySelector('img').src;

                    // Creamos una constante producto con todos los atributos y cantidad 1
                    const product = { nombreProducto, precioProducto, imagenProducto, quantity: 1 };

                    // Creamos la variable carrito y recuperamos el carrito almacenado en sessionStorage o lo inicializamos como un array vacío
                    let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

                    // Agregamos el producto al carrito
                    carrito.push(product);
                    sessionStorage.setItem("carrito", JSON.stringify(carrito));

                    // Redirigimos a la página del carrito para visualizar la compra
                    window.location.href = "carrito.html";
                }
            });
        });
    }

    // Creamos una constante y seleccionamos el contenedor principal donde van a estar todos los elementos que componen el producto (título, imagen...)
    const contenedorCarrito = document.querySelector('.contenedorCarrito');
    if (contenedorCarrito) {
        // Configuramos el contenedor con .style para que tenga el fondo blanco, esté centrado y tenga espacio suficiente para los elementos de dentro
        contenedorCarrito.style.backgroundColor = "white";
        contenedorCarrito.style.margin = "0rem auto 1.5rem auto";
        contenedorCarrito.style.padding = "1.5rem";
        contenedorCarrito.style.maxWidth = "50rem";
        contenedorCarrito.style.borderRadius = "1rem";
        contenedorCarrito.style.border = "1px solid black";

        // Leemos los productos almacenados en sessionStorage
        const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
        contenedorCarrito.innerHTML = ""; // Ponemos la cadena vacia por si había antes algún contenido que pudiese estar en el contenedor

        // Si el carrito está vacío, mostramos un mensaje al usuario
        if (carrito.length === 0) {
            contenedorCarrito.innerHTML = "<p>No hay productos en el carrito</p>";
        } else {
            // Si hay productos en el carrito, recorremos CADA producto para crear su HTML
            carrito.forEach(product => {
                const article = document.createElement("article");
                article.classList.add("articleProducto");
                // Añadimos margen inferior para espaciar cada artículo
                article.style.marginBottom = "1rem";

                // Ahora vamos a crear el HTML de todos los elementosConstruimos el marcado HTML para el producto respetando la nomenclatura de clases definida
                const img = document.createElement("img");
                img.src = product.imagenProducto;
                img.alt = product.nombreProducto;
                img.classList.add("imagenCarrito");
                img.style.maxWidth = "150px";
                img.style.height = "auto";

                const divCarrito = document.createElement("div");
                divCarrito.classList.add("divCarrito");

                const titulo = document.createElement("h2");
                titulo.classList.add("tituloCarrito");
                titulo.textContent = product.nombreProducto;

                const precio = document.createElement("p");
                precio.classList.add("pCarrito");
                precio.textContent = product.precioProducto;

                const cantidad = document.createElement("p");
                cantidad.classList.add("cantidadCarrito");
                cantidad.textContent = `Cantidad: ${product.quantity}`;

                divCarrito.appendChild(titulo);
                divCarrito.appendChild(precio);
                divCarrito.appendChild(cantidad);

                article.appendChild(img);
                article.appendChild(divCarrito);

                // Agregamos el artículo al contenedor del carrito
                contenedorCarrito.appendChild(article);
            });
        }
    }
});




