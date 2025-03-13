/* Modificar el nombre de la clase de los h3 de la página de 'marcas' */
let h3Titulo = document.querySelectorAll('.marca_titulito');

// Uso la función .forEach para recorrer cada h3
// Utilizo el classList para modificar la clase
// .replace para reemplazar el nombre de la clase por otro nuevo, primero se introduce el nombre actual de la clase y después el nombre al que se quiere cambiar
h3Titulo.forEach(titulo_marca => {
    titulo_marca.classList.replace('marca_titulito', 'titulo_individual_marca');
})