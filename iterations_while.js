// let index = 0
// while (index <= 10) {
//     console.log(`Value available: ${index}`);
//     index = index + 2;
// }

let superHeroes = ["spiderman","batman","superman"]

let i = 0
while(i < superHeroes.length)
{
    console.log(`Value is ${superHeroes[i]}`);
    i =  ++i; //this also works as 
    // i =  i + 1;

}

//post and pre increment examples

let number = 5;
console.log(`value of number: ${number}`);
let result1 = number + ++number;
console.log(`value of number after ++number : ${number}`);
console.log(`Result 1: ${result1}`);
let result2 = number + number++;
console.log(`value of number after number++ : ${number}`);
console.log(`Result 2: ${result2}`);


//do while loops
let score = 11;

do {
    console.log(`Score is: ${score}`);
    score++
} while (score < 5);