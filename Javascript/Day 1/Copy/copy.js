let person = {
    fname: "Alice",
    lname: "Smith",
    age: 23,
    address:{
        city:"Bangalore",
        pinCode:560001,
    },
};

// let personCopy = person; // Normal Copy
// let personCopy = {...person}; // Shallow Copy
let personCopy = {...person, address:{...person.address}}; // Shallow Copy for Nested Object

// let personCopy = JSON.parse(JSON.stringify(person)); // Deep Copy

// let personCopy = Object.assign({}, person); // Shallow Copy

person.age=24;
person.address.city="Mumbai";

console.log(person);
console.log(personCopy);

// REST Operator

function add(a,b,...rest){
    return a+b;

}
console.log(add(2,3,4,5,6,7));
