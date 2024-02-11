//this is object literals
const mySymbol = Symbol("key1");

const JsUser = {
    name: "Rafique",
    "full name": "Rafique Khan",
    age: 30,
    [mySymbol]: "myvalue1", //this is how symbols are declared
    location: "Mumbai",
    email: "rafique@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Tuesday"],
    anotherFunction: function(){
        console.log(`You are inside the function`);
    }
}

console.log(JsUser.name); //one way to access the objects
console.log(JsUser["full name"]) //better way to access the object
console.log(JsUser["lastLoggedIn"]);
console.log(JsUser[mySymbol]); //this is how symbols are accessed

// console.log(typeof mySymbol);
// JsUser.email = "wasimakhan@google.com"
console.log("Before Freeze",JsUser);
// Object.freeze(JsUser);
JsUser.email = "rafique@google.com"
// console.log("After Freeze email update",JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js User`);
}

JsUser.welcome = function() {
    console.log(`Welcome Mr. ${this.name}`);
}

JsUser.greeting();
JsUser.welcome();
JsUser.anotherFunction();