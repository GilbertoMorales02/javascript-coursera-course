var train = ["wheat", "barley", "potato", "salt", "rocks"];

console.log(train[0]);


function listArrayItems (arr) {
    for (var i = 0; i < arr.length; i++){
        console.log(i + 1, arr[i])
    }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);


/*
las matrices son objetos. Eso significa que las matrices también tienen algunas propiedades y métodos integrados.

Uno de los métodos incorporados más utilizados en las matrices son los métodos push() y pop().

Para agregar nuevos elementos a una matriz, puedo usar el método push():
*/

var fruits = [];

fruits.push("apple");
fruits.push("pear");
console.log(fruits);

fruits.pop();
console.log(fruits);

function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple','pear','banana');

console.log(simpleArr);