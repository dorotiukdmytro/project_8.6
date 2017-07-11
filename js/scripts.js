// scripts.js

// alert("test");
// alert("test"); is working
// new functions will be add
//var name = prompt('Enter your name');
//alert('Hello, ' + name);
//console.log('Hello, ' + name);

/*var
	a = prompt("Enter parametr base of triangle"),
	h = prompt("Enter parametr height of triangle"),
	triangleArea = a*h/2;
alert("Triangle field is " + triangleArea);
console.log("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);*/

var
	a = 4,
	b = 2,
	value = (a * a) + (2 * a * b) - (b * b);
console.log("Result is: " + value);
if (value > 0) {
	console.log("Result is positive");
} if (value < 0) {
	console.log("Resalt is negative");
} if (value == 0) {
	console.log("Result is zero");
}