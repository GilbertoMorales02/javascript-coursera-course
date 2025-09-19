//MATRICES ITERABLES

var veggies = ['onion','parsley','carrot'];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for ( var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

/*
la propiedad de length que se usa así:
*/
greet.length; // 7

/*
Para leer cada carácter individual en un índice específico en una cadena, comenzando desde cero, puedo usar el método charAt():  
*/
greet.charAt(0); // 'H'

/*
El método concat() une dos cadenas:
*/
"Wo".concat("rl").concat("d"); // 'World'

/*
indexOf devuelve la ubicación de la primera posición que coincide con un carácter:
*/
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

/*
El método de split corta la cadena en una matriz de subcadenas:
*/

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

/*
También hay algunos métodos para cambiar las mayúsculas y minúsculas de las cadenas. Por ejemplo:
*/

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "




//EJERCICIOS DE MATRICES

/*
Tareas para completar

Cree un nuevo literal de matriz vacío y asígnelo a la variable clothes.
Agregue 5 de sus prendas favoritas como cadenas usando el método push().
Retire la quinta prenda de la matriz usando el método pop().
Agregue una nueva prenda usando el método push().
Use console.log para mostrar el tercer elemento de la matriz de clothes en la consola.
Cree un nuevo literal de objeto vacío y asígnelo a la variable favCar.
Cree un nuevo literal de objeto vacío y asígnelo a la variable color al objeto favCar y asígnele un valor de cadena con el color de su elección.
Usando la notación de puntos, asigne una propiedad covertible al objeto y favCar y asígnele un valor booleano de su elección.
Utilice la consola para registrar todo el objeto favCar.
*/

var clothes = [];

clothes.push('Pantalón');
clothes.push('Pants');
clothes.push('Camisa');
clothes.push('Sudadera');
clothes.push('Tenis');

clothes.pop();

clothes.push('Gorra');

console.log(clothes[2]);

var favCar = {}

favCar.color = 'blue';
favCar.convertible = false;

console.log(favCar);