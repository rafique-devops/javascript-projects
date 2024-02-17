let a = 100; //this is at global scope
if(true)
{
    let a = 10 //this is at block scope
    const b = 20
    // var c = 30
    
    // console.log(`Inside Scope: ${a}`);
}

// console.log(`Scope Outside: ${a}`);

function one(){
    const username = "rafique"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()
if(true)
{
    const username = "rafique"
    if(username === "rafique")
    {
        const website = "youtube"
        // console.log(`${username} ${website}`);
    }
    // console.log(website);
}

// console.log(username);

 //we can use the function even before declaring it
console.log(addOne(10));
 function addOne(num)
{
    return num + 1
}

// addOne(5)
// console.log(addTwo(12));
const addTwo = function(num) //here it's not possible because we are storing the values in a variable
{
    return num + 2
}

console.log(addTwo(12));