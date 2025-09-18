# **BKN Eccomerce app**

_Octavio Noval_  
_v1.0.0_

## **Introduccion**

Esta aplicacion recae en las funcionalidades de un eccomerce tradicional, exponiendo sus productos al publico, dando la posibilidad de buscar los productos, filtrarlos, añadirlos a un carrito personal, etc. La idea es que cada uno cuenta con su perfil personal que se guarda en la base de datos junto a sus datos personales y su carrito, dando un entorno privado y personal a cada usuario registrado. Esta aplicacion movil fue desarrollada con React Native, y una base de datos Firebase, a razon de la entrega del proyecto final del curso de desarrollo de aplicaciones de CoderHouse

## **Arquitectura General**

La aplicacion fue desarrollada principalmente en el entorno del front-end con React Native que es la mayor presencia en el scope del curso, sin embargo, la persistencia de los datos tambien es un tema a tratar, por ende se utilizaron dos formatos para persistir los datos en la aplicacion, De lado de productos y perfiles se utilizo Real Time DataBase y Autentication de firebase, donde guardamos las categorias, los productos, y los datos de cada perfil segun su LocalId, y en paralelo utilizamos SQLite dentro del entorno de React Native para la persistencia de la cuenta, es decir, le damos la opción al usuario de guardar el login y mantener la sesion iniciada, para traer los datos desde Firebase usamos RKT query que nos facilita en sintaxis y cantidad de codigo el flujo de la API

## **Funcionalidades Generales**

- **Registro/Login usuarios:** La aplicación cuenta con autenticación desde la parte de la base de datos facilitada por Firebase, actualmente solo cuenta con sign-up via email

- **Presentación de productos/categorías:** Tenemos dos displays de productos, puede ser en el home que se muestran los productos destacados, es decir, los productos que tienen un descuento alto, y sino en la parte de Shop podemos mostrar los productos por categoria. Después tenemos al producto en sí que nos presenta el titulo, precio con descuento o no, imagen, y la opción de agregar al carrito

- **Manejo de carrito en tiempo real:** Al tocar el botón dentro de la pantalla del producto, el mismo producto, se manda a la parte del carrito de base de datos, relacionada al LocalId del usuario y en el momento se actualiza en la pantalla del carrito, asimismo, en la eliminación de productos

- **Manejo de perfil:** En la pantalla de perfil, aparte de mostrarnos toda la información recolectada del signup, nos da la opción de cambiarla en la parte del edit profile. Tenemos la opción para ver la información de usuario, y otra que por razones del scope del curso nos muestra la ubicación tomada desde el dispositivo
