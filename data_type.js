//Primitive
let userName = "Rafique" //String
let age = 31 //Number
let isActive = true //Boolean
const id = Symbol('123') //Symbol
const anotherId = Symbol('123') //Symbol

//Non Primitive
//Arrays
const heroes = ["Iron Man","Spider Man","Bat Man", "Super Man"]

//Objects
const marvel_universe = {
    phaseOne : [
        movieCount = 2,
        {
            movie: "Iron Man 1",
            year: 2008,
            budget: "$800 Million",
            collection: "$3 Billion",
        },
        {
            movie: "Captain America",
            year: 2010,
            budget: "$800 Million",
            collection: "$3 Billion",
        }
    ],
    phaseTwo : [
        movieCount = 2,
        
        {
            movie: "Iron Man 2",
            year: 2010,
            budget: "$800 Million",
            collection: "$3 Billion",
        },
        {
            movie: "Thor",
            year: 2011,
            budget: "$600 Million",
            collection: "$3 Billion",
        }
    ]
}

console.log(marvel_universe.phaseTwo)


//Functions