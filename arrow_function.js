const user = {
    username: "Rafique",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`Welcome Mr. ${this.username}`);
        console.log(`Course Fee for you: ${this.price}`);
        console.log(this);
    }
    
}

user.welcomeMessage();


user.username = "Wasima"
user.welcomeMessage();

console.log(`-------using this keyword inside functions-------`);
function chai() 
{
    let user = "rafique"
    console.log(this.user);
}
chai()

const coffee = function()
{
    let anotherUser = "rafique"
    console.log(this.anotherUser);
}

coffee()

const filterCoffee = () => {
    let cofeeFiltered = "Sorte"
    console.log(this.cofeeFiltered);
}

filterCoffee()

console.log(`--------Arrow Functions--------`);

const addition = (num1,num2)=>{
    return num1 + num2
}

console.log(`Explicit Function Result: ${addition(10,20)}`);


const multiplication = (num1,num2)=> num1 * num2

console.log(`Implicit Function Result: ${multiplication(4,4)}`);