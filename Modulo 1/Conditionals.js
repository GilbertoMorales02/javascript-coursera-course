

/*

*/

//IF / ELSE IF / ELSE

var result = 50;
if (result = 40) {
    console.log("You passed the test")
}
else {
    console.log("You did not pass the test")
}

var place = "first";

if (place == 'first') {
    console.log("Gold")
} else if (place == "second") {
    console.log("Silver")
} else if (place == "Third") {
    console.log("Bronze")
} else {
    console.log("No medal")
}


//SWITCH
 var place = "first";

 switch (place) {
    case "first":
        console.log("Gold");
        break;
    case "second":
        console.log("Silver");
        break;
    case "third":
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
 }



//EJERCICIOS 

/*
Complete los siguientes pasos para crear: ¿Es lo suficientemente mayor?

Declare una variable de edad usando la palabra clave var y configúrela en el número 10.
Agregue una declaración if que verifique si el valor de la variable age es mayor o igual al número 65. Dentro del bloque if, console.log la oración: “Usted obtiene sus ingresos de su pensión”.
Agregue "else if",  donde verificará si el valor de la edad es menor a 65 y mayor o igual a 18. Dentro de este bloque de "else if", escriba “console.log” y luego “Cada mes recibe un salario”.
Agregue otro "else if", y esta vez verifique si el valor de la edad es menor de 18 años. Dentro del bloque "else if", escriba “console.log” y luego “Obtiene una asignación”.
Agregue una declaración "else" para capturar cualquier otro valor.Dentro del bloque, escriba “console.log” y luego “El valor de la variable edad no es numérico”.
Intente ajustar la edad y ejecute el programa para ver cómo afectará el resultado.
*/

var edad = 64;

if (edad >= 65) {
    console.log("Usted obtiene sus ingresos de su pensión");
} else if (edad < 65 && edad >= 18) {
    console.log("Cada mes recibe un salario");
} else if (edad < 18 ) {
    console.log("Obtiene una asignación");
} else {
    console.log("El valor de la variable no es numérico");
}



/*
Codifique el programa de los días de la semana como una declaración switch

En la siguiente línea, defina una nueva variable, asígnele el nombre day y establezca su valor en "Domingo".
Comience a codificar una declaración switch y pase la variable del day como la expresión para evaluar..
En switch, agregue casos para cada día de la semana, comenzando con 'Lunes' y terminando con 'Domingo'. Asegúrese de usar valores de cadena para los días. En cada caso, por ahora, simplemente agregue console.log('Do something') y agregue un salto; en la línea de abajo.
En la parte inferior de la declaración switch, agregue el caso predeterminado y añada console.log('There is no such day').
Por último, actualice las llamadas de console.log para cada caso, según la actividad que tenga en cada uno de los días.
*/

var day = "Sabado";
switch (day){
    case "Lunes":
        console.log("Do something");
        break;
    case "Martes":
        console.log("Do something");
        break;
    case "Miercoles":
        console.log("Do something");
        break;
    case "Jueves":
        console.log("Do something");
        break;
    case "Viernes":
        console.log("Do something");
        break;
    case "Sabado":
        console.log("Do something");
        break;
    case "Domingo":
        console.log("Do something");
        break
    default:
        console.log("There is no such day");
}