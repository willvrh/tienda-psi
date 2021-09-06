# Proyecto e-commerce React CoderHouse

El proyecto fue creado [Create React App](https://github.com/facebook/create-react-app).

## Dependencias (fuera de las solicitadas en el curso)

@fontsource/roboto@4.5.0
@material-ui/core
@material-ui/lab
react-material-ui-carousel
firebase@9.0.1
sass

### Descripción del proyecto

Desarrollo de una tienda online donde se muestren los productos, con sus detalles, categorías y se pueda acceder a cada producto en particular.
Los productos se muestran con sus detalles, cantidad de productos a agregar al carrito y un botón de "Agregar al carrito".

Para la interfaz de la tienda se utilizan los componentes de Material UI.
Se agregó un indicador de la categoría que se está navegando actualmente.

La tienda cuenta con una barra de navegación que muestra el nombre de la tienda, permite volver al inicio y navegar dentro de las categorías, además de mostrar el carrito de compras.


Para la prueba de la tienda se está utilizando un archivo llamado MockData.js desde donde se obtienen los arreglos de datos, por el momento no se está realizando ninguna conexión a una api o base de datos.
El archivo MockData.js contiene un arreglo de productos y otro de categorías que genera dinámicamente el listado de categorías.
