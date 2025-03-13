Enlace hacia el archivo .js: [cambiar_color_boton_comprar.js](../js/cambiar_color_boton_comprar.js)

## ¿Por qué he hecho eso?
He decidido cambiar el color de los botones de la página de comprar para darle una estética diferente a la página de productos, quiero que los botones resalten más.

## Explicación
- Selecciono los botones de comprar con querySelectorAll para seleccionar todos los botones

    
    let boton_comprar = document.querySelectorAll('.boton_producto');

- Ahora que he seleccionado todos los botones y he asignado la variable, uso la función .forEach para añadir los estilos a CADA botón, dentro de la función le doy el nombre 'boton' y con style le cambio los estilos CSS que yo desee

    
    boton_comprar.forEach(boton => {
    boton.style.backgroundColor = 'red'
    boton.style.color = 'white'
    })