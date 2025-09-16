//Creamos el objeto
var storeManager = {}


storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = 'finding business opportunities';
storeManager.greeting = 'Let´s make some money';

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);
console.log(table.priceUSD);

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

/*
Un enfoque alternativo para crear objetos es guardar primero un literal de objeto vacío en una variable, luego usar la notación de puntos para declarar nuevas propiedades sobre la marcha y usar el operador de asignación para agregar valores a esas propiedades; por ejemplo:
*/

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}