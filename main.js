// // // const name = 'Hello';
// // // const age = 30;
// // // const rating = 4.5;
// // // const isCool = true;
// // // const x = null;
// // // const y = undefined;
// // // let z;

// // // console.log(name);
// // // console.log(age);
// // // console.log(rating);
// // // console.log(isCool);
// // // console.log(x);
// // // console.log(y);
// // // console.log(z);

// // // const value = (`My name is ${name}, and my age is ${age}`);

// // // console.log(value);

// // // console.log(value.length);
// // // console.log(value.toUpperCase());

// // // const another = 'hr, admin, developers'
// // // console.log(another.split(','))

// // // const numbers = ['apple','mango','oranges','grapes',10,true];

// // // numbers[6] = 'papaya';
// // // numbers.push('watermelon');
// // // numbers.unshift('strawberries');
// // // numbers.pop();
// // // console.log(numbers);
// // // console.log(Array.isArray(numbers));
// // // console.log(numbers[5]);
// // // console.log(numbers.indexOf('mango'));

// // // const Person = {
// // //     firstName: 'Rafique',
// // //     lastName: 'Khan',
// // //     age: 30,
// // //     hobbies: ['music','movies','sports'],
// // //     address: {
// // //         street: 'Bhandup West',
// // //         city: 'Mumbai',
// // //         state: 'Maharashtra',
// // //         postal: 400078
// // //     }
// // // }
// // // Person.email = 'rafique@email.com';
// // // console.log(Person);
// // // console.log(Person.address);

// // // const {firstName, lastName, hobbies, address} = Person;

// // // console.log(`Full Name: ${firstName} ${lastName}`);
// // // console.log(`Full Address: ${address.street},${address.city}-${address.postal}`)
// // // console.log(hobbies);

// // const todos = [
// //     {
// //         id: 1,
// //         text:   'Take Out Trash',
// //         isCompleted: true
// //     },
// //     {
// //         id: 2,
// //         text: 'Meeting with Boss',
// //         isCompleted: true
// //     },
// //     {
// //         id: 3,
// //         text:   'Dentist Appointment',
// //         isCompleted:    false
// //     }
// // ];

// // // const todoJSON = JSON.stringify(todos);
// // // console.log(todoJSON);

// // // for(let todo of todos)
// // // {
// // //     console.log(todo.text);
// // // }

// // todos.forEach(function(todo)
// // {
// //     console.log(todo.text);
// // });

// // const todoText = todos.map(function(todo)
// // {
// //     return todo.text;
// // })
// // console.log(todoText);

// // const todoCompleted = todos.filter(function(todo)
// // {
// //     return todo.isCompleted === true;
// // }).map(function(todo){
// //     return todo.text;
// // })

// // console.log(todoCompleted);

// // // for (let i = 0; i < todos.length; i++)
// // // {
// // //     console.log(todos[i]);
// // // }
// // // for(let i = 0; i < 10; i++)
// // // {
// // //     console.log(`Loop Numbers: ${i}`);
// // // }

// // // let i = 0;
// // // while (i < 10)
// // // {
// // //     console.log(`While Loop Number is ${i}`);
// // //     i++;
// // // }

// // const x = 20;
// // if (x === 10)
// // {
// //     console.log('x is equal to 10');
// // }
// // else if(x > 10)
// // {
// //     console.log('x is greater than 10');
// // }
// // else
// // {
// //     console.log('x is not equal to 10');
// // }
// //ternary operators
// // const x = 11;
// // const color = x > 10 ? 'red':'blue';

// // switch(color)
// // {
// //     case 'red':
// //         console.log('color is red');
// //         break;
// //     case 'blue':
// //         console.log('color is blue');
// //         break;
// //     default:
// //         console.log('color is not green or blue');
// //         break;
// // }
// //now we will create a constructor and instantiate the objects

// // function Person(firstName,lastName,dob)
// // {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.dob = new Date(dob);
// //     // this.getBirthYear = function(){
// //     //     return this.dob.getFullYear();
// //     // }
// //     // this.getFullName = function(){
// //     //     return `${this.firstName} ${this.lastName}`;
// //     // }
// // }

// // Person.prototype.getBirthYear = function (){
// //     return this.dob.getFullYear();
// // }

// // Person.prototype.getFullName = function (){
// //     return `${this.firstName} ${this.lastName}`;
// // }
// class Person{
//     constructor(firstName,lastName,dob)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }
//     getBirthYear()
//     {
//         return this.dob.getFullYear();
//     }
//     getFullName()
//     {
//         return `Full Name: ${this.firstName} ${this.lastName}`
//     }
// }

// class Department{
//     constructor(deptId,deptName,deptLocation)
//     {
//         this.deptId = deptId;
//         this.deptName = deptName;
//         this.deptLocation = deptLocation;
//     }
//     getAllDept()
//     {
//         return `This is our department: ${this.deptName}`;
//     }
//     getAllLocation()
//     {
//         return `Office Locations : ${this.deptLocation}`;
//     }
// }
// const dept1 = new Department (1,'HR','Mumbai');
// const dept2 = new Department (2,'IT','Mumbai');
// const person1 = new Person ('Rafique','Khan','10-08-1992');
// const person2 = new Person ('Sankalp','Patil','12-09-1995');
// // console.log(person1);
// // person1.firstName = 'Mohammad Rafique';
// // console.log(person1);
// // console.log(person1.dob.getFullYear());
// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());
// console.log(person1.getFullName());
// console.log(person2);

// console.log(dept1);
// console.log(dept1.getAllDept());
// console.log(dept2.getAllDept());
// console.log(dept2);
// console.log(dept2.getAllLocation());

// console.log(`My name is: ${person1.getFullName()}, 
// and I work in ${dept1.deptName} department 
// which is located at: ${dept1.getAllLocation()} `);

//this code is for capturing data from

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
      // alert('Please enter all fields');
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
  
      // Remove error after 3 seconds
      setTimeout(() => msg.remove(), 3000);
    } else {
      // Create new list item with user
      const li = document.createElement('li');
  
      // Add text node with input values
      li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
      // Append to ul
      userList.appendChild(li);
  
      // Clear fields
      nameInput.value = '';
      emailInput.value = '';
    }
  }

// const ages = [13,19,21,25,27,33,39,45,65,43,54,75];

// const canDrink = ages.filter(age => age > 21);
// console.log(canDrink);

const numbers = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];

const checkEvenNumbers = numbers.filter((number,index) => numbers.indexOf(number) === index);
console.log(checkEvenNumbers);