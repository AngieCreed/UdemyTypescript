"use strict";
// string
var myName = 'Max';
// numbers
var myAge = 27;
//boolean
var hasHobbies = true;
hasHobbies = false;
// Assign Explicitly
var myRealAge; //any is default if not explicit
myRealAge = 27;
// myRealAge = '27';
// Arrays and types
var hobbies = ["Cooking", "Sports"];
console.log(typeof hobbies);
hobbies = [100];
// tuples - arrays of mixed types and a limited number of items - has to be in the correct order
var address = ["Superstreet", 99];
// Enums - make numbers more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//Any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
    // return myName
}
;
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 'Max')); // returns NaN because it is expecting a number and can't multiply a number times a string
// functions are a type on their own
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
