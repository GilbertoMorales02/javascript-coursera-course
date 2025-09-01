/* Tarea 1: Uso del operador lógico &&

Está programando un juego de RPG, donde cada personaje tiene ciertos niveles de habilidad en función del valor guardado en su puntuación.

Cree una variable llamada  score y configúrela en 8
Use console.log() que incluye la cadena "Mid-level skills:" y compare la variable de score con más de 0 y menos de 10 usando el operador &&.
El resultado esperado en la consola debería ser: "Mid-level skills: true".
*/

var score = 8;

console.log("Mid-level skills: " + (score < 10 && score > 0));


/*
Tarea 2: Uso del operador lógico ||

Imagine que está programando un videojuego. Actualmente, está a punto de codificar algunos fragmentos relacionados con la condición de finalización del juego.

Debe codificar una nueva variable llamada timeRemaining y establecerla en 0. También debe codificar una nueva variable denominada energy y establecerla en 10.

Luego, debe escribir un fragmento de código que podría usarse para determinar si el juego ha terminado, en función de si el valor de la variable timeRemaining es 0 o el valor de la variable energy es 0.

Complete la tarea siguiendo los siguientes pasos:

Declare la variable timeRemaining y asígnele el valor 0 to it.
Declare la variable energy y asígnele el valor 10.
La consola registra los siguientes parámetros: "Game over: " y timeRemaining == 0 || energy == 0
Tenga en cuenta que el resultado esperado en la consola debe ser: "Game over: true"
*/

var timeRemaining = 0;
var energy = 10;

console.log("Game over: " + (timeRemaining == 0 || energy == 0));

/*
Tarea 3: Usando el operador de módulo, %, para probar si un número dado es impar

Debe codificar un pequeño programa que tome un número y determine si es un número par (como 2, 4, 6, 8, 10).

Para lograr esta tarea, debe declarar seis variables de la siguiente manera:

A la primera variable, denominada num1,  se le debe asignar un valor numérico de 2.
A la segunda variable, denominada num2, se le debe asignar un valor numérico de 5.
A la tercera variable, denominada test1, se le debe asignar el cálculo de num1 % 2. Nota: ejecutar este código devolverá un número.
A la cuarta variable, denominada test2, se le debe asignar el cálculo de num2 % 2. Nota: ejecutar este código también devolverá un número.
A la quinta variable, denominada result1, se le debe asignar el resultado de comparar si el número almacenado en la variable test1 no es igual a 0, es decir, esto: test1 == 0.
A la sexta variable, denominada result2,se le debe asignar el resultado de la comparación si el número almacenado en la variable test2 no es igual a 0, en otras palabras, test2 == 0.
Ejecute el registro de la consola dos veces después de configurar las variables:

El primer registro de la consola debe tener el siguiente código entre paréntesis: "Is", num1, "an even number?", result1
El segundo registro de la consola debe tener el siguiente código entre paréntesis: "Is", num2, "an even number?", result2
Nota: El resultado de la consola debe ser el siguiente:

Is 2 an even number? true

Is 5 an even number? false
*/

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;

var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

/*
Tarea 4: Agregue números usando el operador +

La consola registra el resultado de sumar dos números, 5 y 10, usando el operador +.

Nota: Esta tarea debe completarse en una sola línea de código. El resultado en la consola debe ser 15.
*/

console.log( 5 + 10);


/*
Tarea 5: Concatene números y cadenas usando el operador +

Codifique tres variables:

La primera variable debe ser una cadena con el siguiente valor: "Now in ". Nombre la variable now.
La segunda variable debe ser un número con el valor: 3. Nombre la variable three.
La tercera variable debe ser una cadena con el siguiente valor: "D!". Nombre la variable d.
La consola registra el siguiente código: now + three + d.
Nota: El resultado esperado debe ser: "Now in 3D!".
*/

var now = "Now in ";
var three = 3;
var d = "D!"

console.log(now + three + d);

/*
Tarea 6: Use el operador += para acumular valores en una variable

Codifique una nueva variable y asígnele el nombre counter, asignándole el valor de 0.

En la siguiente línea, use el operador += para aumentar el valor del contador en 5.

En la siguiente línea, use el operador += para aumentar el valor del contador en 3.

En la cuarta línea, la consola registra el valor de la variable counter.

Nota: El valor del resultado debe ser 8.
*/

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);