//if else conditions
//example 1
const temperature = 40;
if(temperature <= 40)
{
    console.log(`temperature is less than equal to ${temperature}`);
}
else
{
    console.log(`temperature is greater than ${temperature}`);
}


//example 2
const score = 200
if(score > 100)
{
    let power = "fly"
    console.log(`User Power: ${power}`);
}
else
{
    console.log(`No Power`);
}

//nested loop
const balance = 700
if(balance < 500)
{
    console.log(`balance less than 500`);
}
else if(balance < 750)
{
    console.log(`balance less than 750`);
}
else if (balance < 900) {
    console.log(`balance less than 900`);
}
else
{
    console.log(`balance greater than 900`);
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false

if(userLoggedIn && debitCard)
{
    console.log(`User Logged In & have valid debit card`);
    if(loggedInFromEmail || loggedInFromGoogle)
    {
        console.log(`user logged in using credentials`);
    }
    else
    {
        console.log(`please check your credentials`);
    }
}
else
{
    console.log(`user unathorized`);
}