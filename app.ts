// string
let myName ='Max';

// numbers
let myAge = 27;

//boolean
let hasHobbies = true;
hasHobbies = false;

// Assign Explicitly
let myRealAge: number; //any is default if not explicit
myRealAge = 27;
// myRealAge = '27';

// Arrays and types
let hobbies:any[] = ["Cooking", "Sports"];
console.log(typeof hobbies)
hobbies = [100];

// tuples - arrays of mixed types and a limited number of items - has to be in the correct order
let address: [string, number] = ["Superstreet", 99];

// Enums - make numbers more expressive
enum Color {
    Gray,
    Green = 100,
    Blue
}

let myColor: Color = Color.Green;
console.log(myColor);


//Any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car)

// functions
function returnMyName(): string { //string is applied to what the return value should be
     return myName;
}
console.log(returnMyName());

// void
function sayHello() : void {  // can use void when not returning anything; if returning, will give error
    console.log("Hello!");
    // return myName
};

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;

}
console.log(multiply(2, 2)); // returns NaN because it is expecting a number and can't multiply a number times a string


// functions are a type on their own
// function types
let myMultiply : (value1: number, value2: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2))

//objects
let userData: { name:string, age: number} = {
    name: "Max", //key value pairs
    age: 27
}


// complex object
let complex: {data:number[], output: (all:boolean) => number[]} ={
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

// type alias
type Complex = {data:number[], output: (all:boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("final value is a number")
}

// never type - never returns - to make intension clear
function neverReturns():never {
    throw new Error('An error!');
}

// nullable types 
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;