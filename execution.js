console.log(`Lets' Cooks Omlette`);

const getTools = ()=>{
    let tool1 = "Bowl";
    let tool2 = "Whisk"
    console.log('Step 1: Gather Your Tools');
    const mix1 = ()=> console.log(`${tool1}: For mixing the eggs`)
    const mix2 = ()=> console.log(`${tool2}: To beat the eggs well`)
    mix1();
    mix2();
}

const getIngredients = ()=> {
    console.log(`Step 2: Get Your Ingredients`);
};

const makeMixture = ()=> {
    console.log(`Step 3: Make the Egg Mixture`);
};

const cookingTime = ()=> {
    console.log(`Step 4: Cooking Time`);
};

const serveIt = ()=> {
    console.log(`Serve It`);
}

getIngredients();
getTools();
makeMixture();
cookingTime();
serveIt();

// execution context exampples

let value1 = 10;
let value2 = 5;
function addNum(num1,num2,...num3)
{
    let total = num1 + num2
    for (const num of num3)
    {
        total += num
    }
    return total
}

let result1 = addNum(value1,value2);
let result2 = addNum(3,2,1,2,3,4,5);
console.log(`Result 1: ${result1}`);
console.log(`Result 2: ${result2}`);