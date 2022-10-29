'use strict';
//SELECTING HTML ELEMENTS IN JS
let message = document.querySelector('.message');
let input = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let randomSecretNumber = document.querySelector('.number');
let score = 20;
let scoreElement = document.querySelector('.score');
let body = document.querySelector('body');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// randomSecretNumber.textContent = randomNumber
//HANDLING CLICK EVENTS
checkBtn.addEventListener('click', function () {
  let guessedNumber = Number(input.value);
  if (!guessedNumber) {
    message.textContent = '⚠ No number';
  } else if (guessedNumber === randomNumber) {
    message.textContent = 'You win';
    body.style.backgroundColor = '#60b347';
    randomSecretNumber.style.width = '30rem';
    randomSecretNumber.textContent = randomNumber;
  } else if (guessedNumber > randomNumber) {
    if (score > 1) {
      message.textContent = 'Too High';
      score--;
      scoreElement.textContent = score;
    } else {
      scoreElement.textContent = 0
      message.textContent = 'You lost the game';
    }
  } else if (guessedNumber < randomNumber) {
    if (score > 1) {
      message.textContent = 'Too High';
      score--;
      scoreElement.textContent = score;
    } else {
      scoreElement.textContent = 0
      message.textContent = 'You lost the game';
    }
  }
});
//MANIPULATING CSS WITH JS
