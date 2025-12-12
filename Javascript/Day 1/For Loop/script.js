var arr=[1,2,3,4,5];

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("----------");

for(var a of arr){
    console.log(a);
}

console.log("----------");

for(var index in arr){
    console.log(index);
}

console.log("----------");

for(var index in arr){
    console.log(arr[index]);
}

console.log("----------");

var person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

for(var key in person){
    console.log(key + ": " + person[key]);
}
