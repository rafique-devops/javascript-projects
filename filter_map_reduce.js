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

console.log(result);

let superHeroes = [
    { name: "spiderman", power: "web shooting"},
    { name: "ironman", power: "rich"},
    { name: "batman", power: "rich"},
    { name: "superman", power: "alpha"},
]

const final = superHeroes.filter((alternate)=> {
    return alternate.power != "rich"
});
console.log(final);

const final2 = superHeroes.filter((alternate)=> {
    const result = alternate.name.length < 7
    return result;
});
console.log(final2);