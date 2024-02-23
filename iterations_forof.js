let superHeroes = [
    { name: "spiderman", power: "web shooting"},
    { name: "ironman", power: "rich"},
    { name: "batman", power: "rich"},
    { name: "superman", power: "alpha"},
]

const myObjects = {
    js: "javascript",
    py: "python",
    cpp: "c++",
    rb: "ruby"
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('UK',"United Kingdom")
map.set('UAE',"United Arab Emirates")

const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
    {
        languageName: "ruby",
        languageFileName:"rb"
    },
]

// for (const heroes of superHeroes) {
//     console.log(`For Of Loop - Super Heroes: ${heroes.name} & powers are: ${heroes.power}`);
// }

// for (const key in superHeroes) {
//     console.log(key);
// }

// for (const [lang, value] of map) {
//     console.log(lang, ': ' , value);
// }

// for (const lang in map) {
//     console.log([lang]);
// }

// map.forEach( (item)=> {
//     console.log(item);
// })

// myObjects.forEach( (item)=> {
//     console.log(item);
// })

// superHeroes.forEach ( (key,index,arr)=> {
//     console.log(key,index,arr);
// })

// function printMe(item)
// {
//     console.log(item);
// }

// superHeroes.forEach(printMe);

myCoding.forEach((item)=>{
    console.log(item["languageName"]);
})

for (const key in myCoding) {
    console.log(key.length);
}

for (const key of myCoding) {
    console.log(key);
}