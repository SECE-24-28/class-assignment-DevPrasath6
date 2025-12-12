// VAR LET CONST DECLARATIONS IN JAVASCRIPT

// VAR
var name = "John";
console.log(name); // John
var name = "Doe";
console.log(name); // Doe
// var allows redeclaration and reassignment
name = "Smith";
console.log(name); // Smith
// var has function scope
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // 2
    }
    console.log(x); // 2
}
varTest();
console.log(x); // ReferenceError: x is not defined


// LET
// let age = 25;
console.log(age); // 25
// let does not allow redeclaration
// let age = 30; // SyntaxError: Identifier 'age' has already been declared
age = 30;
console.log(age); // 30
// let has block scope
function letTest() {
    let y = 1;
    if (true) {
        let y = 2;
        console.log(y); // 2
    }
    console.log(y); // 1
}
letTest();
// console.log(y); // ReferenceError: y is not defined


// CONST
const pi = 3.14;
console.log(pi); // 3.14
// const does not allow redeclaration or reassignment
// const pi = 3.1415; // SyntaxError: Identifier 'pi' has already been declared
// pi = 3.1415; // TypeError: Assignment to constant variable.
// const has block scope
function constTest() {
    const z = 1;
    if (true) {
        const z = 2;
        console.log(z); // 2
    }
    console.log(z); // 1
}
constTest();
// console.log(z); // ReferenceError: z is not defined
// const with objects and arrays
// const person = { name: "Alice", age: 28 };

// person.age = 29; // Allowed
// console.log(person.age); // 29
// person = { name: "Bob", age: 30 }; // TypeError: Assignment to constant variable.
const numbers = [1, 2, 3];
numbers.push(4); // Allowed
console.log(numbers); // [1, 2, 3, 4]
// numbers = [5, 6, 7]; // TypeError: Assignment to constant variable.

// const with functions
const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

// Summary
// var: function-scoped, allows redeclaration and reassignment
// let: block-scoped, allows reassignment but not redeclaration
// const: block-scoped, does not allow redeclaration or reassignment, but allows modification of objects and arrays

let person = {
    fname: "Alice",
    lname: "Smith",
    age: 23,
    address:{
        city:"Bangalore",
        pinCode:560001,
    },
};

const{fname, lname, age, address} = person;
const{city, pinCode} = person.address;

console.log(fname);
console.log(lname);
console.log(age);
console.log(city);
console.log(pinCode);

console.log(person.fname);
console.log(person.address.city);
