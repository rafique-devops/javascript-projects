//1st Promise
const promiseOne = new Promise((resolve,reject)=>{ //2.promise will be created
    setTimeout(() => {
        console.log(`First Async Task is Completed`); 
    }, 2000); //5.because of 2 second timer, settimeout will execute after 2 seconds but before promise 2
    resolve()   
})

promiseOne.then(()=>{
    console.log(`Promise Consumed First Async Task`); //3.this will be executed first and then settimeout code
})

//2nd Promise
new Promise((resolve,reject)=>{ //3. promise will be created
    setTimeout(() => {
        console.log(`Second Async Task is Completed`);
    }, 2000); //6.because of 2 second timer, settimeout will execute after 2 seconds but after promise 1
    resolve()
}).then(()=>{
    console.log(`Promise Consumed Second Async Task`); //4.this will be executed first and then settimeout code
})

console.log(`Promise execution started`); //1.this line will be executed first

//3rd Promise
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            username: "rafiquekhan",
            email: "rafique@gmail.com",
            firstName: "Rafique",
            lastName: "Khan"
        })
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})


//4th Promise
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error)
        {
            resolve({
                username: "rafiquekhan",
                email: "rafique@gmail.com",
                firstName: "Rafique",
                lastName: "Khan"
            })
        }
        else
        {
            reject(`Error: Something Went Wrong`)
        }
    }, 3000);
})

promiseFour.then((data)=>{
    console.log(data);
    return data.firstName
}).then((userdata)=> {
    console.log(userdata);
}).catch((error)=> {
    console.log(error);
})

//5th Promise
console.log(`-----------Promise Five-----------`);
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let userData = [
            {username: "rushikesh", password:"rushikesh1234", isActive: true},
        ]
        let statuses = userData.map((state)=> {
            // console.log(state.isActive);
            return state.isActive
        })

        if (statuses.every(status => status === true)) {
            resolve({userData})
        }
        else
        {
            reject(`Error While Fetching Data`)
        }
    }, 6000);
})

promiseFive.then((data)=> {
    console.log(data);
    const result = data.userData.map((user)=>{
        return user.username
    })
    console.log(`Username: ${result}`);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log(`Promise is eithe Resolved or Rejected`);
})

//6th Promise
const promiseSix = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error)
        {
            resolve({
                username: "Javascript",
                password: "1234"
            })
        }
        else
        {
            reject(`ERROR: something went wrong`)
        }
    }, 8000);
});

async function consumePromiseSix() { //Always try to include or use try catch method 
    try {
        const result = await promiseSix
        console.log(result);;
    } catch (error) {
        console.log(error);
    }
    // const result = await promiseSix
    // console.log(result);
}
consumePromiseSix()