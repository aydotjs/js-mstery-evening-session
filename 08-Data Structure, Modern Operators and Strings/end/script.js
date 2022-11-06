"use strict";
const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Thrills Restaurant",
  location: "Broad Street, Lagos Island, Lagos State",
  categories: ["Swallow", "Vegetarian", "Organic"],
  starterMenu: ["Cassava", "Garri", "Beans"],
  mainMenu: ["Maize", "Plantain", "Bread"],
  orderFood(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderBeans() {
    console.log("Your beans is here");
  },
  openingHours,
};
//WORKING WITH STRINGS
const sentence = "John is walking home";
console.log(sentence[3])
console.log(sentence.length)
console.log(sentence.indexOf("running"))
// console.log(sentence.lastIndexOf("i"))
console.log(sentence.toUpperCase())
console.log(sentence.replace("walking", "running"))
console.log(sentence.charAt(-1))

// const sub = sentence.slice(-1)

// console.log(sub)



//MAPS ITERATION
// const questions = new Map([
//   ["question", "What is the best programming language"],
//   [1 , "Java"],
//   [2 , "Ruby"],
//   [3 , "Python"],
//   [4 , "JS"],
//   ["correct" , 4],
//   [true, "you are correct"],
//   [false, "you are wrong"]
// ])

// for(const [key, value] of questions){
// console.log(`${key} : ${value}`)
// }

// const answer = Number(prompt("Enter your answer")) 
// console.log(questions.get(questions.get("correct") === answer)) 



// console.log()

// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap)


//MAPS
// const canteen = new Map();
// canteen.set("name", "Eat and Chill");
// canteen.set(1, "New Layout, Awka");
// canteen
//   .set(2, "Bodija, Ibadan")
//   .set("open", 11)
//   .set("close", 22)
//   .set(true, "We are Open")
//   .set(false, "we are closed");
// console.log(typeof canteen)

// console.log(canteen.get("name"));
// console.log(canteen.get(true));

// const time = 21;
// console.log(canteen.get(time > canteen.get("open") && time < canteen.get("close")))
// console.log(canteen.has("categories")) 
// canteen.delete(1)
// console.log(canteen.size);
// canteen.clear()
// console.log(canteen);




//Looping through objects
// const properties = Object.keys(openingHours)

// for(const day of properties){
//   const openStr = `we are opened on ${day}`
//   console.log(openStr)
// }

// const values = Object.values(openingHours);

// for(const value of values){
// console.log(value)
// }

// const arrayOfObject = Object.entries(openingHours);
// for (const [key, { open, close }] of arrayOfObject) {
//   console.log(`On ${key},we are open at ${open} and we close at ${close}`);
// }

//Sets
// const arr = ["Rice","Beans", "Cassava", "Rice","Beans"]
// const orderSet = new Set("Ciroma");
// console.log(orderSet.size);
// console.log(orderSet.has("Yam"));
// orderSet.add("Bread")
// orderSet.delete("Rice")
// console.log(orderSet)
// orderSet.clear()
// console.log(orderSet)

// for(const order of orderSet){
//   console.log(order)
// }

// const arrOfWorkers = ["Gateman", "Receptionist", "Manager", "Gateman", "chef"]
// const uniqueWorkers = [...new Set(arrOfWorkers)]
// console.log(uniqueWorkers)

//enhanced object literals
// console.log(restaurant)

// restaurant.orderBeans()

//ARRAY DESTRUCTURING
// const arr = [13, 20, 42, 6, 7, 9];
// const [x, y, z] = arr;
// console.log(x,y,z)
// console.log(arr)
// const [first, , second] = restaurant.categories
// console.log(first, second)
// const [starter, main] = restaurant.orderFood(2, 0)
// console.log(starter)
// console.log(main)
// const nested = [2, 4, 5, [7, 9]];
// const [x, , ,[i,j]] = nested;
// console.log(x)
// console.log(i)
// console.log(j)
// const tinyArray = [7,8,9];
// const [p=2,q=2,r=1,s=1] = tinyArray;
// console.log(p,q,r,s)

//OBJECT DESTRUCTURING
// const{name, categories, openingHours} = restaurant;
// console.log(name)
// console.log(categories)
// console.log(openingHours)

//SPREAD OPERATOR
// const arr = [7,8,9]
// const newArr = [1,2,...arr]
// console.log(...newArr)
const newMainMenu = [...restaurant.mainMenu, "Rice", "Spaghetti"];
//creating shallow copy of an array
const starterMenuCopy = [...restaurant.starterMenu];
// console.log(starterMenuCopy);
//merging two arrays together

// console.log(menu);

// const str = "Ciroma"
// console.log(...str)

// const restaurantCopy = {...restaurant, founder: "Ciroma Adekunle"};
// console.log(restaurantCopy)
//REST PATTERN AND THE REST PARAMETER
//spread op b/c it is on the right hand side of assignment op
// const [a, b, ...others] = [1, 2, ...[3, 4]];
// console.log(a)
// console.log(b)
// console.log(others)
// const [food1, ,food2, ...otherFoods] = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(food1);
// console.log(food2)
// console.log(otherFoods)
//rest syntax on objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays)

// const addNumbers = function (numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// addNumbers(3, 4, 5);
// // addNumbers(3, 3, 4, 5, 6, 8, 7);
// // addNumbers(33, 3, 54, 5, 63, 8, 27, 63, 78);
// const y = [2,3,4,5,67]
// addNumbers(...y)

//SHORT CIRCUITING
// console.log(true || true)
// console.log(true || false)

//logical operators can use any data type
//return any data type
//short circuiting
// console.log(3 || "Ayo" )
// console.log("" || "Brendan" || 5)
// console.log(true || 0)
// console.log(undefined || null || 0)
// console.log(0 || 4 )

// const guest = restaurant.numOfGuest ? restaurant.numOfGuest : 10;
// const guest2 = restaurant.numOfGuest || 10;
// console.log(guest2);

// console.log("------AND Operator------");
// console.log(7 && "Ayo");
// console.log("Hello" && 23 && null && "Ciroma" && "");

// if(restaurant.orderBeans){
//   restaurant.orderBeans()
// }

// restaurant.orderBeans && restaurant.orderBeans();
// console.log("" || "Ayo" || 2)

//NULLISH COALESCING OPERATOR
// restaurant.numOfGuest = 0;
// const guest2 = restaurant.numOfGuest ?? 10;
// console.log(guest2)

//LOGICAL ASSIGNMENT
/*
const restaurant1 = {
  name: "Qubes",
  numOfGuest: 0,
};
const restaurant2 = {
  name: "Eat and Chill",
  owner: "Ciroma",
};

restaurant1.numOfGuest ??= 5;
restaurant2.numOfGuest ||= 5;


restaurant1.owner &&= "Anonymous";
restaurant2.owner &&= "Anonymous";

console.log("rest1", restaurant1);
console.log("rest2", restaurant2);
*/

//looping arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const [index, element] of menu.entries()){
//   console.log(`${index} : ${element}`)
// }
// const arr = [1,2,3,4,5]
// for(const num of arr){
//   console.log(num)
// }
