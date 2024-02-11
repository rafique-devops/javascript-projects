//Stack are mostly for primitive data types where we will get copy of the values of other object/variables
//Heap are mostly for non primitive data types where we get the direct reference of the values

let myUserName = "rafique@google.com"
console.log(myUserName);
let yourUserName = myUserName;
yourUserName = "rafique@somethingelse.com"
console.log(yourUserName);

let users_1 = {
    firstName: "rafique",
    secondName: "khan"
}

let users_2 = users_1;
console.log(users_1);
console.log(users_2);

users_2.firstName = "something"
console.log(users_1);
console.log(users_2);