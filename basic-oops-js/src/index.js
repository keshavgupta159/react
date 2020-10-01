// var, let and const

// function sayHello(){
//   //var scopes to complete function 
//   //let scopes only to the block and is a variable
//   //const scopes only to the block and is a constant
//   // for(var i=0; i<5; i++){//runs for line 10
//   for(let i=0; i<5; i++){//gives an error for 10 as it is undefined
//   // for(const i=0; i<5; i++){//gives error at this very line Assignment to constant variable.
//     console.log(i);
//   }
//   // console.log(i);
// }

// sayHello();

/**************************************************************************************************/

// object in js
// const person = {
//   name: 'MhD', // property
//   walk: function() {},//same as walk - method
//   talk() {}//same as talk - method
// }

// person.talk();
// person['name'] = 'J';

// console.log(person.name);// J

// const targetMember = 'name';
// let nme = person[targetMember.value];
// let nme2 = person[targetMember];
// console.log(nme); // undefined
// console.log(nme2); // J

// person[targetMember] = 'hello';

// console.log(person.name);

/**************************************************************************************************/

// this keyword and binding in js
// const person = {
//   name: 'MhD',
//   walk: function() {
//     console.log(this);
//   }
// }

// person.walk();// call to walk method

// const walk1 = person.walk; //reference to the method - meaning walkm points to the method walk in the person object
// console.log(walk1);
// walk1(); //undefined because this becomes global but it doesnt show "undefined" because it is running in strict mode

// const walk2 = person.walk.bind(person); 
// walk2(); 


/**************************************************************************************************/

// arrow function in js and this with arrow function
// const square = function(number){
//   return number * number;
// }

// const square2 = (number) => {
//   return number * number;
// }

// const square3 = number => {//for single parameter you can remove paranthesis
//   return number * number;
// }

// const square4 = number => number * number; //for single line return function you can remove curly braces

// console.log(square(5));
// console.log(square2(5));
// console.log(square3(5));
// console.log(square4(5));

// const jobs = [
//   {id:1, isActive: true},
//   {id:2, isActive: false},
//   {id:3, isActive: true},
//   {id:4, isActive: false},
// ];

// const activeJobs = jobs.filter(function(jobaa) { return jobaa.isActive; });
// const activeJobs2 = jobs.filter(job => job.isActive);

// console.log(activeJobs);
// console.log(activeJobs2);

// const person2 = {
//   talk() {
//     setTimeout(function() {
//       console.log("this",this);   
//     }, 1000);
//   }
// }

// person2.talk();

// const person3 = {
//   talk() {
//     var self = this;
//     setTimeout(function() {
//       console.log("self",self);   
//     }, 1000);
//   }
// }

// person3.talk();

// const person4 = {
//   talk() {
//     setTimeout(() => {
//       console.log("this",this);   
//     }, 1000);
//   }
// }

// person4.talk();

/**************************************************************************************************/

//Array map
// const colors = ['red', 'green', 'blue'];
// const items = colors.map(function(color){
//   return '<li>' + color + '</li>';
// });

// console.log(items);

// const items2 = colors.map(color => '<li>' + color + '</li>');
// console.log(items2);

// const items3 = colors.map(color => `<li>${color}</li>`);
// console.log(items3);

/**************************************************************************************************/

// Object Destructuring
// const address = {
//   street: 'st',
//   city: 'ci',
//   country: 'co'
// }

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// const { street, city, country } = address; // same as above line, cxan be done for event one varaiable like const { street } = address;
// console.log(street);
// const { street: st } = address; // st variable will be defined as addess.street
// console.log(st);

/**************************************************************************************************/

// Spread Operator
// const first = [1,2,3];
// const second = [4,5,6];

// const combined = first.concat(second);
// const combined2 = [...first, 21 , ...second]; //add anywhere without complexity, and concat multiple arrays at once in easy way
// console.log(combined);
// console.log(combined2);

// const clone = [...first];
// console.log(clone);

// const firstObj = { name: 'MhD' };
// const secondObj = { job: 'Developer' };

// const combinedObj = {...firstObj , location: "New Delhi", ...secondObj, age: 29};
// console.log(combinedObj);

// const cloneObj = {...combinedObj};
// console.log(cloneObj);

/**************************************************************************************************/

// Classes in JavaScript
// const person = {
//   name: "MhD",
//   walk() {
//     console.log("walk");
//   }
// };

// class CoolPerson {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// const person = new CoolPerson('Mhd');
// console.log(person.name);

// class Teacher extends CoolPerson {
//   constructor(name, subject='new'){
//     super(name);
//     this.subject = subject;
//   }

//   teach() {
//     console.log('teach', this.name);
//     console.log(this);// this class and refernce to the CoolPerson class
//   }
// }

// const teacher = new Teacher("Ali","Physics");
// const teacher2 = new Teacher("chem");

// teacher.walk();
// teacher.teach();
// teacher2.teach();

/**************************************************************************************************/

// Modules in JavaScript

// import {Teacher} from './teacher'

// const teacher = new Teacher("Ali","Physics");
// const teacher2 = new Teacher("chem");

// teacher.walk();
// teacher.teach();
// teacher2.teach();

/**************************************************************************************************/

// Default and Named Exports
// import { Teacher } from './teacher' //named exports only not for default
// import Teacher from './teacher' //for default
import Teacher, {promote} from './teacher' //for default and named

// import React, {Component} from 'react'; // Import Components default from react, no path as it is third party libraryand stored in node_modules by default

const teacher = new Teacher("Ali","Physics");
const teacher2 = new Teacher("chem");

teacher.walk();
teacher.teach();
teacher2.teach();
promote();