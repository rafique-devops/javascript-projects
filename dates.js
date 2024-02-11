const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let newDate = new Date(2024,1,11,15,20,3);

console.log(newDate.toLocaleString());

const customDate = new Date();
console.log(customDate.toLocaleString());

console.log(Math.floor(customDate/1000));

console.log(customDate.toLocaleString('default',{
    weekday: "long",
    month: 'long'
}));