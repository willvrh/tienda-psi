# Proyecto e-commerce React CoderHouse

El proyecto fue creado [Create React App] (https://github.com/facebook/create-react-app).

## Dependencias

react@17.0.2
react-dom@17.0.2
create-react-app@4.0.3
react-router-dom@5.3.0
firebase@9.0.2
@fontsource/roboto@4.5.0
@material-ui/core@4.12.3
@material-ui/lab@4.0.0-alpha.60
react-material-ui-carousel@2.3.1
sass@1.39.0


### Descripción del proyecto

Desarrollo de una tienda online donde se muestren los productos, con sus detalles, categorías y se pueda acceder a cada producto en particular.
Los productos se muestran con sus detalles, cantidad de productos a agregar al carrito y un botón de "Agregar al carrito".

Al agregar al carrito los productos se puede generar una órden de compra y el usuario obtiene el ID de la misma, para consultarla posteriormente en el sitio web.

Para la interfaz de la tienda se utilizan los componentes de Material UI.
Se agregó un indicador de la categoría que se está navegando actualmente.

La tienda cuenta con una barra de navegación que muestra el nombre de la tienda, permite volver al inicio y navegar dentro de las categorías, además de mostrar el carrito de compras y un menu de usuario que permite acceder a ciertas funciones si el mismo inicio sesión con Google.

Al iniciar sesión con Google, se habilitan opciones en el menú que permiten ver los productos marcados como favoritos (desde el listado de productos), ver las órdenes de compra generadas por el usuario o cerrar sesión para navegar como invitado.


Para la prueba de la tienda se está utilizando una conexión a Firebase para obtener productos, categorías, órdenes y favoritos.

Todos los datos de la tienda son cargados dinámicamente.


### Contextos

Se utilizaron 3 contextos en el proyecto: AuthContext, CartContext y WishlistContext.

AuthContext: Permite obtener el estado de inicio de sesión del usuario y sus datos.

CartContext: Mantiene el estado del carrito y sus productos.

WishlistContext: Cuenta con las funciones necesarias para trabajar con la lista de favoritos.



### Características del sistema

Se muestra al usuario el stock de los productos desde los listados y los detalles, en caso de no haber stock, se notifica con una alerta al ver los detalles y el usuario no puede generar la compra de ese producto.

Se agregó un slider de categorías para poder navegar fácilmente entre categorías, además del menú que se encuentra en el navbar.

El carrito de compras es persistente utilizando localStorage del navegador.

El usuario puede iniciar sesión con su cuenta de google para llevar un registro de sus órdenes generadas o tener una lista de productos favoritos.

En caso de haber iniciado sesión, el nombre y el email del usuario se cargan automáticamente desde su cuenta de google al formulario de finalización de compra.

El usuario ve en todo momento a través del breadcrumbs en que sección de la tienda está navegando.

Los productos pueden ser marcados/desmarcados como favoritos y agregados al carrito desde la seccion "Mis favoritos"