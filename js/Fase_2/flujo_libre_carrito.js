document.addEventListener("DOMContentLoaded", () => {
    // Primero capturamos el clic en los botones "Comprar" de la página de productos
    const buyButtons = document.querySelectorAll('.boton_producto');
    // Comprobamos si existen botones de compra
    if (buyButtons.length > 0) {
        // Iteramos sobre cada botón de compra
        buyButtons.forEach(button => {
            // Asignamos el evento click a cada botón
            button.addEventListener("click", (e) => {
                e.preventDefault(); // Evitamos la acción por defecto del enlace
                // Obtenemos el contenedor del artículo de producto correspondiente
                const productArticle = button.closest('.productos_article');
                if (productArticle) {
                    // Extraemos y limpiamos los datos del producto (nombre, precio e imagen)
                    const name = productArticle.querySelector('.titulito_producto').textContent.trim();
                    const price = productArticle.querySelector('.div_producto p').textContent.trim();
                    const image = productArticle.querySelector('img').src;

                    // Creamos un objeto producto con cantidad inicial 1
                    const product = { name, price, image, quantity: 1 };

                    // Recuperamos el carrito almacenado en sessionStorage o lo inicializamos como un array vacío
                    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

                    // Agregamos el producto al carrito
                    cart.push(product);
                    sessionStorage.setItem("cart", JSON.stringify(cart));

                    // Redirigimos a la página del carrito para visualizar la compra
                    window.location.href = "carrito.html";
                }
            });
        });
    }

    // Creamos una constanteSuponemos y seleccionamos el 'div' que es el contenedor donde van a estar los productos que seleccionemo
    const contenedorCarrito = document.querySelector('.contenedorCarrito');
    if (contenedorCarrito) {
        // Configuramos el estilo del contenedor para que tenga fondo blanco, esté centrado y tenga espacio interno
        contenedorCarrito.style.backgroundColor = "white";
        contenedorCarrito.style.margin = "0rem auto 1.5rem auto";
        contenedorCarrito.style.padding = "20px";
        contenedorCarrito.style.maxWidth = "800px";
        contenedorCarrito.style.borderRadius = "1rem";
        contenedorCarrito.style.border = "1px solid black";

        // Leemos los productos almacenados en sessionStorage
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        contenedorCarrito.innerHTML = ""; // Limpiamos cualquier contenido que pudiese estar en el contenedor

        // Si el carrito está vacío, mostramos un mensaje al usuario
        if (cart.length === 0) {
            contenedorCarrito.innerHTML = "<p>No hay productos en el carrito</p>";
        } else {
            // Si hay productos en el carrito, iteramos sobre cada uno para crear su marcado HTML
            cart.forEach(product => {
                const article = document.createElement("article");
                article.classList.add("cart__item");
                // Añadimos margen inferior para espaciar cada artículo
                article.style.marginBottom = "1rem";

                // Construimos el marcado HTML para el producto respetando la nomenclatura de clases definida
                article.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="cart__image" style="max-width:150px; height:auto;">
          <div class="cart__details">
            <h2 class="cart__name">${product.name}</h2>
            <p class="cart__price">${product.price}</p>
            <p class="cart__quantity">Cantidad: ${product.quantity}</p>
          </div>
        `;
                // Agregamos el artículo al contenedor del carrito
                contenedorCarrito.appendChild(article);
            });
        }
    }
});
