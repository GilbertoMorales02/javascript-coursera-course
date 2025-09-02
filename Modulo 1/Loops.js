// FOR

for (var i = 1; i<=3 ; i++){
    console.log(i)
}
console.log('Go')

for ( var i = 10; i > 0; i--) {
    console.log(i);
}
console.log('Feliz Año Nuevoooo!')

//WHILE

var contador = 3;

while (contador > 0) {
    console.log(contador);
    contador = contador - 1;
}

//NESTED Ó BUCLE ANIDADO

for (var i = 2023; i < 2025; i++){
    console.log(i);
    for (var j = 1; j < 13; j++){
        console.log("--------", j);
    }
}


for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

/*
Tarea 1

Escriba un bucle "for" que realice exactamente el mismo código repetitivo que este:

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
*/

for (var i = 1; i<=5; i++) {
    console.log(i);
}
console.log('Counting completed');


/*
Escriba un bucle "for" que realice exactamente el mismo código repetitivo que este:

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
*/

for (var i = 5; i>0; i--) {
    console.log(i);
}
console.log('Countdown finished');

/*
Escriba un bucle "while" que realice exactamente el mismo código repetitivo que este:

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
*/

var i = 1;

while (i <= 5) {
    console.log(i);
    i = i + 1;
}
console.log('Counting completed!');

/*
Tarea 5

Escriba un bucle "while" que realice exactamente el mismo código repetitivo que este:

console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
*/

var i = 2018;

while (i <= 2022) {
    console.log(i);
    i = i + 1;
}

/*
EJERCICIOS GENERADOS POR LA IA

🔹 Nivel 1: básicos (entender la sintaxis y flujo)
	1.	Imprimir del 1 al 10 con for.
👉 Tip: usa console.log(i).
	2.	Imprimir solo los números pares del 1 al 20 con while.
👉 Tip: incrementa de 2 en 2 o usa condición i % 2 === 0.

*/

// 1.-
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//2.-
var i = 0;

while (i <= 20 && i % 2 == 0) {
    console.log(i);
    i = i + 2;
}


/*
Ejercicio 1

En este ejercicio, creará el código para un for loop utilizando la variable de contador denominada i a partir de 1.

Para hacer que el contador se incremente en 1 en cada bucle, usará i++.

La condición de salida para el bucle for debe coincidir con la salida dada a continuación.

Dentro del bucle, escriba una declaración if-else, que verificará las siguientes condiciones:

Primero, comprobará si el valor de i es 1. Si es así, su código registrará en la consola la cadena "Gold medal".
A continuación, comprobaré si el valor de i es 2. Si es así, su código registrará en la consola la cadena "Silver medal".
Luego, su código verificará si el valor de i es 3. Si es así, registrará en la consola la cadena "Bronze medal".
Para todos los valores restantes de i, su código registrará en la consola solo el valor de i.
Nota: El registro de la consola esperado de todo el código debería ser el siguiente.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/


for ( var i = 1; i <= 10; i++){
    if (i == 1){
        console.log("Gold medal");
    } else if ( i == 2){
        console.log("Silver medal");
    } else if ( i == 3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}


/*
Ejercicio 2. Use el código completo de la tarea anterior, pero convierta los condicionales en una declaración switch.

Cuando codifica la solución, el resultado en la consola debe permanecer exactamente igual que en la pregunta anterior.

Nota: Necesitará tres casos separados para las tres medallas y un caso predeterminado para todos los demás valores de la variable i.
*/

for ( var i = 1; i <= 10; i++){
    switch (i){
        case 1:
            console.log('Gold metal');
            break;
        case 2:
            console.log('Silver medal');
            break;
        case 3:
            console.log('Bronze medal');
            break;
        default:
            console.log(i);
    }
}

