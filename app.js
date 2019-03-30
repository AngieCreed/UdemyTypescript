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
console.log(multiply(2, 2)); // returns NaN because it is expecting a number and can't multiply a number times a string
// functions are a type on their own
// function types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: "Max",
    age: 27
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
// never type - never returns - to make intension clear
function neverReturns() {
    throw new Error('An error!');
}
// nullable types 
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
// let & const
// let is defined in the block in which it's created
var variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99
// can't change the value of const variable
console.log("Arrow Functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("hello");
};
greet();
// default parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("done", start);
};
countdown();
////////////////////////////////////////////////
// Rest & Spread
console.log("rest and spread");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3));
