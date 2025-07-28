# Administrando Contenidos - Desafío

Este proyecto es una **aplicación web de portafolio** construida con HTML, CSS y JavaScript. Permite mostrar tus trabajos o proyectos destacados de forma dinámica y visualmente atractiva. Perfecto para practicar maquetado web y la administración de contenido mediante integración con APIs.

## Características

- **Diseño minimalista y moderno** con CSS Grid y tipografía profesional.
- **Portafolio dinámico:** Agrega proyectos desde JavaScript o con un backend de Contentful.
- **Componentes reutilizables:** Usa templates HTML para tarjetas de proyectos.
- **Interfaz responsive:** Se adapta correctamente a distintos tamaños de pantalla.
- **Fácil personalización:** Cambia fácilmente los estilos, contenido y estructura.

## Estructura del Proyecto

- **index.html:** Página principal con sección de portafolio y template de tarjeta.
- **style.css:** Estilos modernos, tipografía de Google Fonts y diseño responsivo.
- **main.js:** Lógica para crear tarjetas dinámicas conectándose a Contentful o con datos locales.
- **images/:** Carpeta sugerida para almacenar imágenes personalizadas de tus proyectos.

## ¿Cómo empezar?

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador favorito.
3. Los proyectos se obtienen automáticamente desde Contentful (puedes modificar esto en el JS).
4. Personaliza tu portafolio editando el contenido en JavaScript o el HTML.

## Personalización y Extensión

- **Agregar proyectos dinámicamente:** Usa la función `addWorkCard` en `main.js` pasando un objeto JS:

  ```js
  addWorkCard({
    title: 'Mi Proyecto',
    description: 'Descripción breve del proyecto.',
    image: 'images/mi-proyecto.jpg',
    url: 'https://miproyecto.com',
  });
  ```

- **Editar el backend:** Por defecto, se conecta a Contentful. Cambia la URL o adapta la función `getWorks` para consumir datos desde tu origen.
- **Modificar estilos:** Edita `style.css` para cambiar colores, fuentes o el tamaño de las tarjetas.

## Integración con Contentful

El archivo JS utiliza la API de Contentful para cargar proyectos automáticamente. Asegúrate de tener tus credenciales y estructura de contenido acorde a lo esperado:

- Espacio y Access Token configurados en la variable `CONTENTFUL_API`.
- Campos requeridos: `titulo`, `descripcion`, `imagen`, `url`.

Puedes adaptar el endpoint o los campos según tu propio espacio de Contentful.

## Ejemplo de Vista

La página incluye una sección con tarjetas de ejemplo configurables. Puedes personalizar imágenes, títulos, descripciones y enlaces según tus necesidades.

---

¿Quieres que lo guarde/reescriba como tu nuevo `README.md`?
