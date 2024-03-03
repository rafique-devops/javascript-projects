const user = {
    username: "Rafique",
    loginCount: 8,
    isLoggedIn: true,
    getUserDetails: function () {
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

user.getUserDetails();
// console.log(user.username);

//Example of Constructor function
function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this; //return is not required if we are using new keyword
}

const userOne = new User("Rahul",9,true); //using new keyword will create a new instance of that object
const userTwo = new User("Raj",8,false); //using new keyword will create a new instance of that object
const userThree = User("Roy",10,false); // here we are not using new keyword so whenver we will try to create a new user
const userFour = User("Rock",19,true); // the values will be override on the previous one

console.log(userOne);
console.log(userTwo);
console.log(userThree);
