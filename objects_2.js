//singleton object
const tinderUser = new Object();
// console.log(tinderUser);

//non singleton object
const anotherTinder = {
    email: "some@google.com",
    fullname: {
        users_fullname: {
            users_firstname: "Rafique",
            users_lastname: "Khan",
            hobbies: [
                {
                    hobbie_name:"Cricket",
                    style: "All Rounder"
                },
                {
                    hobbie_name: "Billards",
                    style: "Pro Level"
                },
                {
                    hobbie_name: "Gamer",
                    style: "First Person Shooter"
                }
            ]
        }
    }
}
// console.log(anotherTinder);

tinderUser.id = "123abc"
tinderUser.name = "someone"
tinderUser.email = "someone@gmail.com"

console.log(tinderUser);
console.log("Keys: ",Object.keys(tinderUser));
console.log("Values: ",Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));

// console.log(anotherTinder.fullname.users_fullname.hobbies);
 console.log(`\n---------Another Object Method-------\n\n`);

 const object1 = {
    1: "a",
    2: "b"
 }
 const object2 = {
    3: "a",
    4: "b"
 }

//  const object3 = Object.assign({},object1,object2) 
//always try to add {} while assiging coz it's target in which the output will be
const object3 = {...object1,...object2}
console.log(object3);

console.log(`\n------- Object DeStructuring--------\n`);
//example 1
const course = {
    courseName: "Javascript",
    courseInstructor: "Rafique",
    coursePrice: 999
}

const {courseInstructor: teacher} = course
console.log(teacher);

//example 2
const response = {
    data: {
        productName: "Shampoo",
        productPrice: 49.99,
        productStock: 10
    }
};

const { productName: name, productPrice:price, productStock: stocks } = response.data;
console.log(`Product: ${name}, Price: ${price}`);

console.log(`Available Stock: ${stocks}`);