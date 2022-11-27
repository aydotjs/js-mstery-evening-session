// "use strict";
//default parameters
// const add = function (x = 0, y = 0 ) {
//   console.log(x + y);
//   return 5
// };
// add(5, 10);

// //first class function and higher order functions
// const subtract = function(){
// return function(){

// }
// }
// h1.addEventListener("click", function(){
// console.log(this)
// })
// ["ayo", "tayo"].forEach(name => {console.log(name)})
// const x = function(){
//     console.log("I am in a function")
// }
// const y = function(bunny){
// console.log("Do something")
// bunny()
// }
// y(x)

// const calc = function (num1, num2, calcType) {
//   if (calcType === "add") {
//     console.log(num1 + num2);
//   } else if (calcType === "subtract") {
//     console.log(num1 - num2);
//   }
// };
// calc(2, 4, "add");
// calc(2, 4, "subtract");

// const add = function(x,y){
// console.log(x + y)
// }
// const subtract= function(x,y){
// console.log(x - y)
// }
// const multiply = function(x,y){
// console.log(x * y)
// }
// const calc = function(num1, num2, callback){
// callback(4,9)
// }
// calc(2,3, subtract)

//FUNCTIONS RETURNING FUNCTIONS
// const greet = function (greeting) {
// return function(name){
//     console.log(`${greeting} ${name}`)
// }
// };
// greet("Hello")("Dumebi")

//CALL AND APPLY METHOD
// const people = {
//   myName: "Ayo",
//   logger: function () {
//     console.log(this.myName);
//   },
// };
// people.logger()
//CALL AND APPLY METHOD
// const mtn = {
//   tarriff: "MTN pulse",
//   details: [],
//   sub: function (dataSize, nameOfUser) {
//     console.log(
//       `Dear ${nameOfUser}, you have subscribed for ${dataSize}MB. Your tarriff plan is ${this.tarriff}`
//     );
//     this.details.push(dataSize, nameOfUser);
//   },
// };
// const glo = {
//   tarriff: "Glo Yafun Yafun",
//   details: [],
// };
// const airtel = {
//   tarriff: "Air Life",
//   details: [],
// };
// const smile = {
//   tarriff: "Smiling",
//   details: [],
// }(
  // const subscriber = mtn.sub
  // subscriber.call(mtn,500, "Dumebi")
  // subscriber.apply(airtel,[1000, "Tayo"] )

  // subscriber.call(airtel,500, "Kate")
  // subscriber.call(smile, 1000, "Tope")
  // console.log(airtel)
  //BIND METHOD
  // const subscribeAirtel500 = subscriber.bind(airtel, 500)
  // const subscribeGlo = subscriber.bind(glo)
  // const subscribeSmile = subscriber.bind(smile)

  // subscribeAirtel500( "Ayo")
  // subscribeAirtel500( "Kunle")
  // subscribeGlo(1500, "Dayo")
  // subscribeSmile(2000, "Shayo")
  // mtn.data = 500;
  // mtn.buyData = function(){
  //   console.log(this)
  //   console.log(this.data * 2)
  // }
  // document.querySelector('button').addEventListener("click", mtn.buyData.bind(mtn) )

  //IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
  // const runOnce = function(){
  //   console.log("This will only run once")
  // }
  // runOnce()
  // runOnce()
  // runOnce()
  // //iife
  // (() => {console.log("this will run once")})();
//CLOSURE
const getData = function(){
  let dataSize = 500
  return function(){
    dataSize++
    console.log(`${dataSize} MB`)
  }
}
const subscriber = getData()
subscriber()
subscriber()
subscriber()
console.dir(subscriber)