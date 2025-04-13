document.addEventListener("DOMContentLoaded", () => {
    // ----- Página de Productos: Capturar el clic en "Comprar" -----
    const buyButtons = document.querySelectorAll('.boton_producto');
    if (buyButtons.length > 0) {
        buyButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault(); // Evita la acción por defecto del enlace
                // Se obtiene el artículo de producto contenedor
                const productArticle = button.closest('.productos_article');
                if (productArticle) {
                    // Extraer datos del producto según la estructura de tu HTML
                    const name = productArticle.querySelector('.titulito_producto').textContent.trim();
                    const price = productArticle.querySelector('.div_producto p').textContent.trim();
                    const image = productArticle.querySelector('img').src;

                    // Crear objeto producto (con cantidad 1)
                    const product = { name, price, image, quantity: 1 };

                    // Recuperar el carrito guardado en sessionStorage o inicializarlo como un array vacío
                    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

                    // Agrega el producto al carrito (no se checa duplicados por simplicidad)
                    cart.push(product);
                    sessionStorage.setItem("cart", JSON.stringify(cart));

                    // Redirigir a la página del carrito
                    window.location.href = "carrito.html";
                }
            });
        });
    }

    // ----- Página del Carrito: Renderizar los productos guardados -----
    // Se asume que en la página carrito.html existe un contenedor con la clase "cart__items"
    const cartContainer = document.querySelector('.cart__items');
    if (cartContainer) {
        // Configurar estilos al contenedor para que tenga fondo blanco, se centre y tenga espacio interno
        cartContainer.style.backgroundColor = "white";
        cartContainer.style.margin = "0px auto 20px auto"; // Sin margen arriba, centrado y margen inferior de 20px
        cartContainer.style.padding = "20px";
        cartContainer.style.maxWidth = "800px"; // Ajusta el ancho máximo según necesites
        cartContainer.style.borderRadius = "1rem";
        cartContainer.style.border = "1px solid black";

        // Leer los productos almacenados en sessionStorage
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cartContainer.innerHTML = ""; // Limpiar cualquier contenido previo

        // Si el carrito está vacío, mostrar un mensaje
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>No hay productos en el carrito</p>";
        } else {
            cart.forEach(product => {
                const article = document.createElement("article");
                article.classList.add("cart__item");
                // Añadir margen inferior para espaciar cada artículo
                article.style.marginBottom = "1rem";

                // Se construye el marcado respetando la nomenclatura de clases que desees
                article.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="cart__image" style="max-width:150px; height:auto;">
          <div class="cart__details">
            <h2 class="cart__name">${product.name}</h2>
            <p class="cart__price">${product.price}</p>
            <p class="cart__quantity">Cantidad: ${product.quantity}</p>
          </div>
        `;
                cartContainer.appendChild(article);
            });
        }
    }
});
