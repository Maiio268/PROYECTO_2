Enlace hacia el archivo .js: [crear_boton_(modificarHTML).js](../js/crear_boton_%28modificarHTML%29.js)

## ¿Por qué he hecho eso?
He decidido añadir un botón al párrafo inicial de la página para darle una estética diferente, además, quería que el usuario pudiera interactuar de alguna forma con el párrafo introductorio de la página y el botón de "Más info" ha sido la clave.

## Explicación
- Selecciono el artículo de la página de 'Inicio' con querySelector ya que quiero seleccionar 1 solo article


    let articleInicio = document.querySelector('.parrafo_inicio_article');

- Creo el enlace para más tarde asignarlo como hijo del article


    let aBotonMasInfo = document.createElement('a');

- Escribo el contenido del texto del enlace


    aBotonMasInfo.textContent = "Más info";

- Creo los atributos del enlace


    aBotonMasInfo.setAttribute('href', '#');
    aBotonMasInfo.setAttribute('target', '_self');
- Podría asignarle a la variable 'aBotonMasInfo' el nombre de la clase de un botón ya creado y estilizado en CSS, pero Voy a modificar los estilos CSS directamente desde aquí con .style


    aBotonMasInfo.style.padding = '1rem';
    aBotonMasInfo.style.borderRadius = '1rem';
    aBotonMasInfo.style.borderColor = 'black';
    aBotonMasInfo.style.backgroundColor = '#c5d1eb';
    aBotonMasInfo.style.color = '#395b50';
    aBotonMasInfo.style.marginTop = '1rem';

- Para que el botón respete el margen superior tengo que cambiar el display a 'inline-block', esto hace que el enlace se coloque en su propia línea, es decir, ya no se va a colocar en la misma línea que el resto de hijos del article, por lo que así se soluciona el problema de que el botón se superponga sobre el texto del article, además, inline-block hace que el botón no cambie sus proporciones


    aBotonMasInfo.style.display = 'inline-block';

- Por último, le pongo como hijo al article el botón que he creado


    articleInicio.appendChild(aBotonMasInfo);