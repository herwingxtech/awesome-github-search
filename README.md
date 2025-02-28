# Buscador de Repositorios de GitHub

[![GitHub Pages Status](https://img.shields.io/badge/GitHub%20Pages-live-green.svg)](https://herwingx.github.io/awesome-github-search/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Este proyecto es un buscador de repositorios de GitHub que permite a los usuarios encontrar proyectos según un tema o palabra clave. Está construido utilizando tecnologías web estándar: HTML, CSS y JavaScript (sin frameworks ni bibliotecas externas, aparte de `fetch` para las peticiones HTTP).  Utiliza la API de GitHub para obtener los resultados de búsqueda en tiempo real.  Este proyecto ha sido desarrollado como parte de mi aprendizaje sobre la API de GitHub y se considera una posible contribución al GitHub Developer Program.

**[Ver Demo en Vivo](https://herwingx.github.io/awesome-github-search/)**  <!-- Reemplaza con tu URL -->

## Características

*   **Búsqueda por tema:**  Ingresa cualquier tema o palabra clave para encontrar repositorios relevantes.
*   **Resultados claros:**  Muestra el nombre del repositorio (con enlace a su página en GitHub), su descripción y el número de estrellas.
*   **Interfaz sencilla:**  Diseño minimalista y fácil de usar.
*   **Código limpio:**  Código bien comentado y estructurado, siguiendo buenas prácticas de desarrollo.
*   **Desplegado con GitHub Pages:**  Fácilmente accesible en línea.
*   **Manejo de errores:**  Incluye mensajes de error informativos para el usuario en caso de fallos en la búsqueda o problemas de conexión.

## Tecnologías Utilizadas

*   **HTML5:**  Para la estructura del documento.
*   **CSS3:**  Para los estilos y la presentación.
*   **JavaScript (ES6+):**  Para la lógica de la aplicación, incluyendo:
    *   **`fetch` API:**  Para realizar peticiones a la API de GitHub.
    *   **Manipulación del DOM:**  Para mostrar los resultados dinámicamente.
    *   **Eventos:**  Para manejar la interacción del usuario.
    *   **Funciones asíncronas (`async`/`await`):**  Para manejar las promesas de `fetch`.
*   **GitHub API (v3 REST):**  Específicamente, el endpoint `/search/repositories`.
*   **GitHub Pages:** Para el alojamiento del sitio web estático.

## Estructura del Proyecto

```
awesome-github-search/
├── index.html 
├── src    
   ├── script.js
├── css          
   ├── style.css          
└── README.md           
```

## Cómo Usar la Aplicación

1.  **Visita la página:**  Abre la aplicación en tu navegador (a través de la URL de GitHub Pages).
2.  **Ingresa un tema:**  Escribe una palabra clave o tema en el campo de entrada (por ejemplo, "python", "machine learning", "react", etc.).
3.  **Haz clic en "Buscar":**  El botón iniciará la búsqueda a través de la API de GitHub.
4.  **Visualiza los resultados:** Los repositorios encontrados (si los hay) se mostrarán debajo del formulario, con su nombre, descripción y número de estrellas.  Si no hay resultados, o si ocurre un error, se mostrará un mensaje apropiado.

## Cómo Clonar y Ejecutar Localmente

Si deseas ejecutar este proyecto localmente (para desarrollo, pruebas o modificaciones), sigue estos pasos:

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/herwingx/awesome-github-search.git
    cd awesome-github-search
    ```

2.  **Abre `index.html` en tu navegador:**

    No necesitas un servidor web para ejecutar este proyecto, ya que es estático.  Simplemente abre el archivo `index.html` directamente en tu navegador favorito (arrastra y suelta el archivo en una ventana del navegador, o haz doble clic en él).

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores, tienes ideas para mejoras o quieres añadir nuevas funcionalidades, por favor:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama para tu contribución (`git checkout -b mi-nueva-caracteristica`).
3.  Realiza tus cambios y haz commit de ellos (`git commit -m "Agrega: mi nueva característica"`).
4.  Sube tu rama al fork (`git push origin mi-nueva-caracteristica`).
5.  Abre un Pull Request en este repositorio (el original).

Por favor, asegúrate de seguir un estilo de código consistente y de añadir comentarios explicativos a tu código.

## Licencia

Este proyecto está bajo la Licencia MIT.  Consulta el archivo [LICENSE](LICENSE) (si lo creaste, si no indica simplemente "Este proyecto está bajo la licencia MIT" si lo distribuyes así.) para más detalles.  La Licencia MIT es una licencia permisiva de código abierto. Te recomiendo que uses este tipo de licencia en este caso.

## Créditos

*   Desarrollado por Eduardo Macías
*   [API de GitHub](https://docs.github.com/en/rest?apiVersion=2022-11-28)

## Contacto

Si tienes alguna pregunta o comentario sobre este proyecto, puedes contactarme a través de mi perfil de GitHub: [herwingx](https://github.com/herwingx).
