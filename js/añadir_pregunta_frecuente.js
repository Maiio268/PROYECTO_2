/* Añadir una pregunta frecuente */
let preguntasSection = document.querySelector(".preguntas_section")
let preguntasNuevoArticle = document.createElement("article");
preguntasNuevoArticle.className = "preguntas_article";

let h4Article = document.createElement("h4");
h4Article.textContent = "¿Puedo cancelar mi pedido después de haberlo realizado?";

let pArticle = document.createElement("p");
pArticle.textContent = "Si necesitas realizar cambios en tu pedido, contáctanos lo antes posible. Si tu pedido ya ha sido procesado o enviado, no podremos realizar modificaciones.";

preguntasNuevoArticle.appendChild(h4Article);
preguntasNuevoArticle.appendChild(pArticle);

preguntasSection.appendChild(preguntasNuevoArticle);















