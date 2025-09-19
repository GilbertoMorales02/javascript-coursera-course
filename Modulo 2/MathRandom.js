//MATH RANDOM

//Genera un decimal entre 0 y 0.99
Math.random();

//Guardamos en una variable
var decimal = Math.random();

//Mandamos a consola el valor del decimal
console.log(decimal);

//Mandamos a consola el valor del decimal multiplicado por 10
console.log(decimal * 10);

//MATH CEIL

//Redondea el deocimal al numero entero mas cercano

var myNum = Math.ceil(2.49);
console.log(myNum);

var myNum2 = Math.ceil(1.01);
console.log(myNum2);



//Juntamos los 2

var numAleatorio = Math.random() * 2;

var numRedondeado = Math.ceil(numAleatorio);

console.log(numRedondeado);