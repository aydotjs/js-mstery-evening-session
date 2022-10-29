"use strict";
// let firstName = "Ciroma";

// const first = function () {
//   let a = 1;
//   console.log(a);

// };

// function second() {
//   let b = 5;
// }

// function third() {
//   let c = 3;
//   console.log(c);

// }
//SCOPE AND SCOPE CHAIN
// let myName = "Ayo";

//LEXICAL SCOPING

//GLOBAL SCOPE
// let firstName = "Ayo";

// function logger() {
//   function inner() {
//     console.log(firstName);
//   }
//   inner()
// }
// logger();

//FUNCTION SCOPE

// function sayMyName (){
// let myName = "Ayo";
// console.log(myName)
// }
// sayMyName()
// console.log(myName)
// function calcAge(birthYear){
// const currentYear = 2022;
// const age = currentYear - birthYear
// console.log(age)
// }

// calcAge(2000)
// console.log(age)

//BLOCK SCOPE
// let age = 20;
// if(age > 18){
//   var isAdult = true;
//     console.log(isAdult)
// }
// console.log(isAdult)

// SCOPE CHAIN

// function outerFunction(){
//     let outerVariable = "yaay, we outside";

//     function innerFunction (){
//         let innerVariable = "Yaay, we inside"
//         console.log(outerVariable)
//     }
//     innerFunction()
// }
// outerFunction()

//HOISTING
// greeter()

// function greeter(){
//     console.log("Hello, how are you today")
// }
// let greeter = function(){
//     console.log("Hello Everyone")
// }
//TEMPORAL DEAD ZONE

//  const myName = "Ciroma";
//  if(myName === "Ciroma"){
//    console.log(`Ciroma is a ${job}`)
//     const age = 20;
//     console.log(age)
//     const job = "Teacher";
//  }

//THIS KEYWORD
// const person1 = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   birthYear: 2000,
//   calcAge: function () {
//     console.log(2022 - this.birthYear);
//     // console.log(this)
//   },
// };
// const person2 = {
//   firstName: "Janet",
//   lastName: "Jessica",
//   birthYear: 2000,
//   calcAge: function () {
//     // console.log(2022 - this.birthYear);
//     console.log(this)
//   },
// };
// person2.calcAge();

// function logger(){
//     console.log(this)
// }
// logger()
// const greeter =function(){
//     console.log(this)
// }
// greeter()
//REGULAR FUNCTION VS ARROW FUNCTION
// const person1 = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   complexion: "Dark skinned",
//   birthYear: 2000,
//   calcAge: function () {
//     console.log(20);
//   },
//   getComplexion: () => {
//     console.log(this);
//   },
// };
// person1.calcAge();
// person1.getComplexion()

//PRIMITIVES VS OBJECTS
// let age = 20;
// let oldAge = age;
// age = 21;
// console.log(age);
// console.log(oldAge);

const person1 = {
  firstName: "Ciroma",
  lastName: "Adekunle",
  age: 20
};
let person2 = Object.assign({}, person1)
person2.age = 30;
person2.complexion = "Dark skinned"

console.log("Person 1 ==>",person1)
console.log("Person 2 ==>",person2)