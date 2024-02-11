const marvel_heroes = ["ironman","spiderman","thor"];
const dc_heroes = ["superman","batman","aquaman"];


console.log("original marvel",marvel_heroes);
console.log("original dc",dc_heroes);

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log("added dc in marvel",allHeroes);
// console.log("original marvel array",marvel_heroes);
// console.log("original dc array",dc_heroes);

const indian_heroes = ["krrish","shaktiman","rajni"]

const anotherHeroes = [...marvel_heroes,...dc_heroes,...indian_heroes]
console.log(anotherHeroes);
// const replacing = anotherHeroes[8]
// console.log(replacing);
console.log(`\n\n-----Using Flat Method---------\n\n`);

const real_array = [1,2,3,[4,5,6],7,8,[9,[10,11,[12,13,14]]]]
console.log("original array",real_array);
console.log(real_array.flat(Infinity)); //we can use either number of level or directly provide Infinity keyword to let the js manage it on its own

//sometimes we get data in any form which we need to convert it in arrays
console.log(`\n-------Array Conversion------\n`);
const values_1 = "Rafique";
const values_2 = { firstName: "Rafique",lastName: "Khan"}
const values_3 = 100
console.log("checking if array or not:",Array.isArray(values_1));
console.log("converts input to array",Array.from(values_1));
console.log("converts input to array based key or value",Array.from(values_2.lastName));

console.log("add multiple inputs to a single array",Array.of(values_1,values_2,values_3));
