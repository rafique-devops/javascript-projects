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