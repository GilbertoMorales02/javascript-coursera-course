
//FUNCION SIN PARAMETROS

function addTwoNumbs () {
    var a = 20;
    var b = 20;
    var c = b+a;

    console.log(c);
}

addTwoNumbs();


//FUNCION CON PARAMETROS

function addTwoNumbers (a,b) {
    var c = b + a;
    console.log(c);
}

addTwoNumbers(2,5);
addTwoNumbers(3,6);




//EJERCICIOS DE FUNCIONES 

/*
Tarea 1:

Escriba una función llamada letterFinder  que acepte dos parámetros: word y match.

Tarea 2:

Codifique un bucle 'for' dentro de la estructura de la función. El contador del bucle for debe comenzar en cero, incrementarse en 1 en cada iteración y salir cuando el valor de la variable del contador sea igual a la longitud del parámetro word.


*/


function letterFinder (word,match){
    for ( var i = 0; i < word.length; i++){
        if ( word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at',i);
        }
    }
}

letterFinder("test","t");