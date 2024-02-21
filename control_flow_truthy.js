//truthy value is something where our program or code automatically considers if value is true or false

// const userEmail = "rafique@gmail.com" //output will be true
const userEmail = "" //out will be false because empty considered as false

if (userEmail) {
    console.log("got user email");
} else {
    console.log("did not have user email");
}

//falsy values - false, 0, -0 (negative zero), BigInt 0n, "", null, undefined, NaN

//truthy values - "0" , 'false'," ", [], {}, function(){}

const emailArray = [1]
if (emailArray.length == 0) {
    console.log("Array is empty");
}
else
{
    console.log("Array is not empty");
}

const emptyObject = {
    users: [
        {
            name:"1"
        },
        {
            // name:"2"
        }
    ]
}
if (Object.keys(emptyObject.users[0]).length == 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

console.log(Object(emptyObject));

//Nullish Coalescing Operator (??): specially used for null and undefined values
//it works just like fallback in case of failure how program should do or work

let value1=null;
console.log(value1);
// let defaultValue = "Default Value" ;
const addNum = ()=> console.log("Inside addNum Function");
value1 = undefined ?? null ?? addNum()

// console.log(value1);


//Terniary Operator
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log(`price less 80`): console.log(`price more than 100`);
