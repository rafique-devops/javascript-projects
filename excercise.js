//Printing Even/Odd Numbers: Write a loop to print all even or odd numbers within a given range (e.g., between 1 and 50)

for (let index = 1; index < 50; index++) {
    if(index % 2 == 0)
    {
        // console.log(`Even Numbers: ${index}`);
    }
    else
    {
        // console.log(`Odd Numbers: ${index}`);
    }
    
}

// print print numbers
function isPrime(num)
{
    if(num <= 1)
    {
        return false
    }
    if(num <= 3)
    {
        return true
    }

    for (let i = 2; i < i * i <= num; i++) {
        return false
    }
    return true
}
let lower = 1;
let upper = 50;
// console.log(`Prime Numbers between ${lower} & ${upper}: `);

for (let num = lower; num <= upper; num++) {
    if (isPrime(num)) {
        // console.log(num);
    }
    
}

//shopping cart
const items = [
    { name: "Apple", price:1.99},
    { name: "Kiwi", price:3.99},
    { name: "Oranges", price:2.99}
]

let cartValue = 0;
for (let i = 0; i < items.length; i++) {
    // cartValue = cartValue + items[i].price;
    cartValue += items[i].price;
}
console.log(`Your total cost is: Rs.${cartValue.toFixed(2)}`);