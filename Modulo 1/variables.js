//Declaración de una variable y uso de la misma
var person = 'Gilberto Morales';
var greeting = 'Hi';
console.log(greeting, person);

//Ejercicio 1 Coursera de Variables 

/*
Declare una nueva variable llamada petDog y asígnele el nombre Rex.
Declare una nueva variable llamada petCat y asígnele el nombre Pepper.
Registe en la consola la variable petDog.
Registe en la consola la variable petCat.
Registre en la consola el texto "My pet dog's name is: " y la variable petDog.
Registre en la consola el texto "My pet cat's name is: " y la variable petCat.
Declare otra variable y asígnele el nombre catSound. Asígnele la cadena "purr".
Declare otra variable y asígnele el nombre dogSound. Asígnele la cadena "woof".
Registre en la consola la variable petDog, luego la cadena "says", luego la variable dogSound.
Registre en la consola la variable petCat, luego la cadena "says", luego la variable catSound.
Reasigne el valor almacenado en catSound a la cadena "meow".
Registre en la consola la variable petCat, luego la cadena "now says", luego la variable catSound.
*/

var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: ", petDog);
console.log("My pet cat´s name is: ", petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog, "says", dogSound);
console.log(petCat,"says", catSound);

catSound = "meow";
console.log(petCat, "now says", catSound);