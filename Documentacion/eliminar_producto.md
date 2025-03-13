Enlace hacia el archivo .js: [eliminar_producto.js](../js/eliminar_producto.js)

## ¿Por qué he hecho eso?
He decidido eliminar varios productos de la tienda de productos porque no me convencía esa estructura, me gusta más que haya 1 solo section y que aparezca una sola línea de 3 productos.

## Explicación
- Selecciono el segundo section de los productos
- He decidido usar getElementsByClassName ya que me interesa coger 1 solo section que en este caso es el segundo, por eso al final del selector aparece '[1]', si quisiera seleccionar el primer section pondría [0]

    
    let sectionProductos = document.getElementsByClassName("productos_section")[1];

- Selecciono el segundo article del section que he seleccionado anteriormente, por eso en vez de document. escribo sectionProductos. seguido del selector


    let articleProductos = sectionProductos.getElementsByClassName("productos_article")[1];



- Elimino el article seleccionado anteriormente con .remove
    

    articleProductos.remove();



