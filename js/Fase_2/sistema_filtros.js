/* Primero vamos a crear un array con todos los nombres de las marcas */
const array_marcas = ["Lamborghini", "Bugatti", "Aston Martin", "Pagani", "Ferrari", "Maserati"]

/* Vamos a crear el contenedor donde van a estar los 6 botones que filtren por marcas los coches */
/* Creamos el 'div' en el documento y le añadimos el nombre de su clase */
const contenedor_botones = document.createElement('div')
contenedor_botones.classList.add('contenedor_filtro')

/* Ponemos el nombre del array donde están las marcas con .forEach para recorrer cada elemento del array*/
/* Vamos a crear botones para CADA marca del array */
array_marcas.forEach(element => {
    const boton_filtro = document.createElement('button')
    boton_filtro.classList.add('boton_filtro')

    /* Añadimos un atributo personalizado al botón con el nombre de la marca */
    boton_filtro.setAttribute('contenido_marca', 'array_marcas')
    // Esto establece el texto visible dentro del botón como el nombre de la marca.
    boton_filtro.textContent = array_marcas

    // Le añadimos el evento al botón al clickar sobre él, si clickamos en el botón, se llamará automáticamente a la función 'filtrarProductosPorMarca'
    boton_filtro.addEventListener('click', () => {
        filtrarProductosPorMarca(array_marcas);
    });
})
/* Agregamos el contenedor en el body, específicamente al final ya que usamos prepend */
/* Si se quiere añadir al principio del body se usa 'prepend' y si se quiere añadir al final usamos 'append' */
document.body.prepend(contenedor_botones)

function filtrarProductosPorMarca (array_marcas) {
    const productos = document.querySelectorAll('.productos_article'); //Creamos la variable productos y cogemos todos los artículos de los productos de la tienda
    }


