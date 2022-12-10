'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MOBILE BANKING WEBSITE
// Data
const account1 = {
  owner: 'Ayobami Owoeye', //ao
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Chima Francis', //cf
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Esther Ojile', //eo
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Helen Nneka', //hn
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//CREATING HTML ELEMENTS
const displayMovements = function (account) {
  containerMovements.innerHTML = '';
  account.forEach(function (mov, i) {
    const typeOfMov = mov > 0 ? 'deposit' : 'withdrawal';
    const htmlElement = `
<div class="movements__row">
<div class="movements__type movements__type--${typeOfMov}">${
      i + 1
    } ${typeOfMov}</div>
<div class="movements__value">${mov} &#8358</div>
</div>`;
    containerMovements.insertAdjacentHTML('beforeend', htmlElement);
  });
};

//COMPUTE USERNAME
const computeUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
computeUserName(accounts);
//DISPLAYING BALANCE
const displayBalance = function (account) {
  account.balance = account.movements.reduce(
    (acc, move, index, arr) => acc + move,
    0
  );
  labelBalance.textContent = `${account.balance} NGN`;
};

//COMPUTING SUMMARY
const computeSummary = function (movements) {
  const income = movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${income} NGN`;
  const withdrawals = movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)} NGN`;
  const interest = movements
    .filter(move => move > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(move => move >= 1)
    .reduce((acc, mov, i, arr) => {
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = `${interest} NGN`;
};

//IMPLEMENTING LOGIN
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    //display movements
    displayMovements(currentAccount.movements);
    //display balance
    displayBalance(currentAccount);
    //display summary
    computeSummary(currentAccount.movements);
    inputLoginPin.value = '';
    inputLoginUsername.value = '';
    console.log(currentAccount);
  }
});

//IMPLEMENTING TRANSFERS
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    account => account.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    currentAccount.username !== receiverAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
  }
  
  displayMovements(currentAccount.movements);
  //display balance
  displayBalance(currentAccount);
  //display summary
  computeSummary(currentAccount.movements);
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
});
//IMPLEMENTING CLOSING OF USER ACCOUNT

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['NGN', 'Nigerian Naira'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
*/
//SIMPLE ARRAY METHODS
// let arr = ["a", "b", "c", "d", "e"]
//slice
// console.log(arr.slice(2))
// console.log(arr)
// console.log(newArr)
// const arrCopy = arr.slice()
// const arr2 = [...arr]
// console.log(arrCopy)
// console.log(arr2)

//SPLICE METHOD
//  console.log(arr.splice(0,1))
//  console.log(arr)

//REVERSE
// let arr = ["a", "b", "c", "d", "e"]
// arr.reverse()
// console.log(arr)

//CONCAT
// let arr = ["a", "b", "c", "d", "e"]
// const letters = ["f","g","h"]
// console.log(arr.concat(letters))
// console.log([...arr, ...letters])

//JOIN
// let arr = ["a", "b", "c", "d", "e"]
//  console.log(arr.join("--"))

//THE NEW AT METHOD
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr[arr.length -1])
// console.log(arr.at(-1))
// console.log("Ayo".at())

//FOR EACH METHOD

//for of loop
/*
for (const x of movements) {
  if (x > 0) {
    console.log(`you deposited ${x}`);
  } else {
    console.log(`you withdrew ${Math.abs(x)}`);
  }
}
//forEach method
console.log('------ for each method------');
movements.forEach(function (mov, i, myArr) {
  console.log(myArr)
  if (mov > 0) {
    console.log(`${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`${i + 1 }: you withdrew ${Math.abs(mov)}`);
  }
});
*/
//DATA TRANSFORMATION
//map, filter, reduce
/*
//MAP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const usdToNaira = 750;
const movementsInNaira = movements.map(function (mov) {
  return mov * usdToNaira;
});
const movementsInNaira2 = movements.map(mov => mov * usdToNaira);
console.log(movementsInNaira2);

//FILTER
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

//REDUCE
const bal = movements.reduce((accumulator, mov) =>  accumulator + mov, 0);
console.log(bal)
*/
//CHAINING METHODS
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const totalDepo = movements
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${totalDepo} NGN`
//   console.log(totalDepo)

//FIND METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

//FINDINDEX METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const indexOfFirstWithdrawal = movements.findIndex(mov => mov < 0);
// console.log(indexOfFirstWithdrawal)


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const x = movements.splice();
// console.log(x)
// console.log(movements)
/////////////////////////////////////////////////
