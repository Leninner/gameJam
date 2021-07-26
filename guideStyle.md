# Guía de Estilos de "Vivir o Vivir"

Esta es la guía oficial desarrollada por Lenin para el presente proyecto.

## Nombramiento de Variables, Funciones, Objetos

En lugar de snake_case, se deberá usar camelCase para nombrar a los distintos componentes del proyecto.

Ejemplo:

//Malo

let do_some = "12"

//Bueno

let doSome = "12"

Además de utilizar el estandar camelCase para nombramiento se deben utilizar comillas dobles para los strings.

> Consejos:

Empezar las funciones con un verbo identificador:

-   do
-   get
-   set

Empezar las variables con un identificador específico:

-   let contenedorPadre = document.createElement("div");
-   const contenedorMain = document.querySelector(".div") ;

## Divide y Vencerás

Para desarrollar los comportamientos del sitio web, se deben hacer mediante sus propios módulos o funciones.

> Evitar el código espagueti.

## Indentación

Utilizar 4 espacios al momento de empezar a hacer algo dentro de un condicional o un ciclo*.
