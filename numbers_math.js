//Numbers
const score = 400
console.log(score);

const balance = new Number(12309.99009)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log(balance.toPrecision(4));

console.log(balance.toLocaleString('en-IN'));

//Maths

console.log(`------------Start Of Math--------------`);
console.log(Math.abs(-10));
console.log(Math.round(4.7));
console.log(Math.ceil(5.1));
console.log(Math.floor(7.9));

console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));
console.log((Math.random()*10)) + 1;

const min = 750;
const max = 800;

let randomMagic = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Random Number: ${randomMagic}`);