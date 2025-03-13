Enlace hacia el archivo .js: [añadir_pregunta_frecuente.js](../js/a%C3%B1adir_pregunta_frecuente.js)

### ¿Por qué he hecho eso?
He decidido añadir una pregunta frecuente más ya que, en mi opinión, habían pocas preguntas frecuentes y veía conveniente que hubiese una más.

### Explicación
- Selecciono el section con querySelector, (no con getElement ya que este selector nos da una colección HTML, no un solo elemento, que es lo que quiero) que es un selector de las preguntas frecuentes para después añadirle el article hijo.

    
    let preguntasSection = document.querySelector(".preguntas_section")

- Creo el nuevo articulo y le asigno el nombre de la clase que tiene el resto de los artículos, despues crearé los elementos dentro del article.

    
    let preguntasNuevoArticle = document.createElement("article");
    preguntasNuevoArticle.className = "preguntas_article";

- Ahora voy a crear el h4 y p del article y voy a crear el contenido del texto de cada uno

    
    let h4Article = document.createElement("h4");
    h4Article.textContent = "¿Puedo cancelar mi pedido después de haberlo realizado?";
    
    let pArticle = document.createElement("p");
    pArticle.textContent = "Si necesitas realizar cambios en tu pedido, contáctanos lo antes posible. Si tu pedido ya ha sido procesado o enviado, no podremos realizar modificaciones.";
    
- Hay que añadir el h4 y el p como hijos del article.

    
    preguntasNuevoArticle.appendChild(h4Article);
    preguntasNuevoArticle.appendChild(pArticle);

- Hay que añadir el article como hijo del section.
    
    
    preguntasSection.appendChild(preguntasNuevoArticle);









