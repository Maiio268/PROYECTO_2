Enlace hacia el archivo .js: [modificar_atributo_class_h3.js](../js/modificar_atributo_class_h3.js)

## ¿Por qué he hecho eso?
He decidido cambiar el nombre de las clases de los h3 que indican el nombre de las marcas de mi página web ya que el nombre del class no me parece tan intuitivo ni aclaratorio.

## Explicación

- Selecciono todos los h3 que tengan cuya clase sea 'marca_titulito'


    let h3Titulo = document.querySelectorAll('.marca_titulito');

- Uso la función .forEach para recorrer cada h3
- Utilizo el classList para modificar la clase
- .replace para reemplazar el nombre de la clase por otro nuevo, primero se introduce el nombre actual de la clase y después el nombre al que se quiere cambiar


    h3Titulo.forEach(titulo_marca => {
    titulo_marca.classList.replace('marca_titulito', 'titulo_individual_marca');
    })





