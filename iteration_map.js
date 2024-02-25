const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num)=> {
//     return num + 10
// })

//method chaining where we can use apply multiple level of chaining
const newNum = myNumbers
.map( (num)=>{ return num * 10})
.map( (num)=> { return num + 1})
.filter((num)=> { return num > 50})
.map( (num)=> { return num - 11})

console.log(newNum);