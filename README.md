# CoffeeSoap

Sitio estático de presentación de un proyecto universitario de jabón artesanal de café. Incluye galería de producto, información del proyecto y animaciones decorativas.

## Tecnologías y archivos

| Archivo | Función |
| --- | --- |
| index.html | Estructura, secciones y contenido del producto. |
| estilo.css | Diseño adaptable, controles de foco y movimiento reducido. |
| galeria.js | Cambio de imagen, estados aria-pressed y animaciones al desplazarse. |
| jabon.png / empaque.png / logo.png | Recursos gráficos locales. |

## Ejecutar

Abre index.html directamente o ejecuta `python -m http.server 8000` en la raíz y visita http://localhost:8000. No usa paquetes npm, backend ni claves.

## Verificación

- Alterna Empaque y Barra: cambian la imagen, el texto alternativo y el estado del botón.
- Navega a El jabón y El proyecto; comprueba los enlaces de vuelta al inicio.
- Revisa el diseño a 375 px y 1280 px de ancho.
- Con movimiento reducido, se ocultan los granos decorativos y se desactiva el desplazamiento suave.
- Para comprobar la sintaxis del script: `node --check galeria.js`.

## Alcance

Página informativa de un producto académico. No implementa carrito, cobros, cuentas ni persistencia. Los textos del producto pertenecen a la presentación original del proyecto.
