//Arithmetic Operators

// + Addition
console.log(2 + 2);
console.log(1 + 2 + 3 + 4 + 5);
console.log ( 99 + 1)

// - Subtraction
console.log(20 - 18);
console.log(99 - 1);
console.log(7 - 23);

// / Division
console.log( 8/ 1 );
console.log( 4 / 2);
console.log(2 / 10);

// * Multiplication
console.log(2 * 3);
console.log( 99*9);
console.log(7*87);



//Comparison Operators

// > Greater than
console.log(3 > 2);
console.log(10>34);
console.log(1>1.1);

// < Less than
console.log(9<3);
console.log(99<100);
console.log(5<9);

// == Equal to
console.log(99==99);
console.log(100==99);
var num1 = 10;
var num2 = 8;
console.log(num1==num2);

// != Not equal to
console.log(num1!=num2);
console.log(100!=100);
console.log(9!=23);



//Logical Operators


// && Check fot both conditions to be true

console.log(num1 > 5 && num2 < 10);
console.log( 10 > 5 && 8 < 99);
console.log(num2>10 && num1<9);


// || Checks for at least one condition be true
console.log(num1> 5 || num2 > 10);
console.log( 10 > 5 || 8 < 99);
console.log(num2>10 || num1<9);

// ! Returns false if the result is true
console.log(!(num1> 5 || num2 > 10));
console.log(!( 10 > 5 || 8 < 99));
console.log(!(num2>10 || num1<9));


//El operador de módulo: % 
console.log(10%2);
console.log((10%2)==0);
console.log(22 % 5);

//El operador de igualdad estricta: ===
console.log(10===100);
console.log(10==="10");
console.log(10===10);

//El operador de asignación de suma: +=
var num3 = 1;
num3 += 3;
console.log(num3);

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."