//USO DE TYPEOF

var test = typeof('what is this?');
var test1 = typeof(10);
var test2 = typeof(true);
var test3 = typeof(1 < 2);
var test4 = typeof([1,2,3,4]);
var test5 = typeof({ firstProperty: 1 });
var test6 = typeof(function abc() {
    console.log('abc');
});

console.log(test);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);


