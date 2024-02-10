"use strict"; //treats all js code as newer version

// console.log(3+3);
// console.log("Rafique");

//data types with their values

let name = "Rafique"
let age = 31
let isActive = true
let salary = 10000000000

// console.log("name: ",name)
// console.log("age: ", age)
// console.log("status: ",isActive);
// console.log("salary: ",salary);

//type conversion example

let score = null
let convertedScore = Number(score);
// console.log(typeof convertedScore);
// console.log(convertedScore);

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(name);
// console.log(booleanIsLoggedIn);

let firstNumber = 100;
console.log("Before Increment",firstNumber);
let incremenetNumber = ++firstNumber
console.log("After Increment",firstNumber)
console.log("After Increment Number",incremenetNumber);

let anotherIncrement = --incremenetNumber
console.log("After Another Increment",anotherIncrement)