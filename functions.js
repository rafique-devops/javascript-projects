function addTwoNumbers(num1,num2)
{
    console.log(num1 + num2);
}

addTwoNumbers(2,3);
addTwoNumbers(11,11);

addTwoNumbers("a","b");

//another method for function definitions

function multiplyNum(num1,num2){
    let result = num1 * num2;
    return result;
}

function substractNum(num1,num2)
{
    return num2 - num1;
}

const result = multiplyNum(10,10);
console.log((`Result: ${result}`));
console.log(typeof result);

const anotherResult = substractNum(8,12);
console.log(`Substraction: ${anotherResult}`);

//one more way to write the function with conditional statements
function loginUser(username)
{
    if(username === undefined)
    {
        console.log(`Please enter valid username`);
        return
    }
    else
    {
        return `${username} just logged in`
    }
}

//another way to define functions with default value

function userLoggedOut(username = "Devs")
{
    if(!username)
    {
        console.log(`Failed to log out`);
        return
    }
    else
    {
        return `${username} logged out successfully....`
    }
}


console.log(loginUser("Rafique"));
// console.log(userLoggedOut("Rafique"));
console.log(userLoggedOut());

console.log(`------------Function with Object & Arrays-------`);

function calculateCartValue(...price)
{
    return price;
}

console.log(calculateCartValue(500,200,300,10,10));

const user = {
    username: "rafique",
    products: "Shampoo",
    price:199
}

function getProductPrice(anyObjects)
{
    console.log(`Cart for: ${anyObjects.username}`);
    return `Product: ${anyObjects.products} & Price: ${anyObjects.price}`
}

console.log(getProductPrice(user)); //we can either pass the object reference
console.log(getProductPrice({ //or directly pass complete objects
    username: "sankalp",
    products:"conditioner",
    price:299
}));

const myArray = [200,400,500,600,800]

function returnArray(getArray)
{
    return getArray[1]
}

console.log(returnArray(myArray));