function add(a,b){
    return a+b;
}

console.log(add(1,2));
console.log("----------");

//anonymous function

var sub = function(a,b){
    return a-b;
};

console.log(sub(5,3));
console.log("----------");

//arrow function

var multiply = (a,b) => {
    return a*b;
};
console.log(multiply(2,4));
console.log("----------");

var divide = (a,b) => a/b;
console.log(divide(2,4));
console.log("----------");

//IIFE - Immediately Invoked Function Expression

(function(name){
    return a/b;
})(2,1);
console.log("----------");

// Callback function

function main(add){
    var sum =10+20;
    console.log("Sum: "+sum);
    add(sum)
}

function second(num){
    console.log("This is second function : ",num);
}

main(second);

// Callback hell or Pyramid of doom
