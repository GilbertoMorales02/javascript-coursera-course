//Si la función es una propiedad de un objeto, se la denomina método.

var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}

//Exploremos esto más a fondo ahora. Crearé un objeto usando algo conocido como la función de constructor.

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
//Luego, quiero agregar un método a mi objeto car. Y este método, cuando se llama, generará un texto en la consola.
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
car.lightsOn = function() {
    console.log('The lights are on');
}
console.log(car);
car.turnTheKey();
car.lightsOn();