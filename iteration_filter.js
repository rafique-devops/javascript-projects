// const myCoding = ["javascript","ruby","swift","java"];

// const results = myCoding.forEach((lang)=> {
//     // console.log(lang);
//     return lang;
// })
// console.log(results);

const score = [1,2,3,4,5,6,7,8,9,10]

const result = score.filter((num)=>{
    const res = num % 2 != 0
    return res;
})

// console.log(result);

const superHeroes = [
    { name: "Iron Man", power: "Tech Genius", weakness: "Ego", affiliation: "Avengers", age:45 },
    { name: "Captain America", power: "Super Soldier", weakness: "Righteousness", affiliation: "Avengers", age:105 },
    { name: "Thor", power: "God of Thunder", weakness: "Arrogance", affiliation: "Asgardian" , age:1129},
    { name: "Hulk", power: "Super Strength", weakness: "Rage", affiliation: "Avengers" , age:48},
    { name: "Black Widow", power: "Master Spy", weakness: "Past Trauma", affiliation: "Avengers", age:35 },
    { name: "Spider-Man", power: "Spider Abilities", weakness: "Responsibility", affiliation: "Friendly Neighborhood", age:22 },
    { name: "Doctor Strange", power: "Master of Magic", weakness: "Arrogance", affiliation: "Sorcerer Supreme", age:42 },  
    { name: "Black Panther", power: "Vibranium Suit", weakness: "Isolationism", affiliation: "Wakandan" , age:39},
    { name: "Captain Marvel", power: "Cosmic Power", weakness: "Overconfidence", affiliation: "Cosmic" , age:80},
    { name: "Scarlet Witch", power: "Reality Manipulation", weakness: "Emotional Instability", affiliation: "Avengers", age:19 },
    { name: "Ant-Man", power: "Shrinking/Growing", weakness: "Scale", affiliation: "Avengers" , age:41} 
]; 


let final = superHeroes.filter((alternate)=> {
    return alternate.power != "rich"
});
// console.log(final);

final = superHeroes.filter((alternate)=> {
    const result = alternate.name.length < 7
    return result;
});
// console.log(final);

final = superHeroes.filter( (alternate)=> {
    return alternate.affiliation === "Avengers" || alternate.affiliation === "Wakandan"
})

// console.log(final);

final = superHeroes.filter( (alternate)=>{
    return alternate.age < 30 && alternate.affiliation !== "Avengers"
})

console.log(final);