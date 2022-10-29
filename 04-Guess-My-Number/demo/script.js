'use strict';
let randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
let checkButton = document.querySelector('.check');
let messageElement = document.querySelector('.message');
let randomNumber = document.querySelector('.number');
let bodyElement = document.querySelector('body');
let scoreElement = document.querySelector('.score');
let highScoreElement = document.querySelector('.highscore');
let resetGameBtn = document.querySelector('.again');
let score = 20;
let highScore = 0;
function displayMessage(message) {
  messageElement.textContent = message;
}
checkButton.addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);
  //checking if random secret number is equal to inputted number
  if (guessedNumber === randomSecretNumber) {
    // message.textContent = 'You are correct';
    displayMessage('You are correct');
    bodyElement.style.backgroundColor = '#60b347';
    randomNumber.textContent = randomSecretNumber;
    randomNumber.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else if (guessedNumber !== randomSecretNumber) {
    if (score > 1) {
      // message.textContent = 'Too High';
      displayMessage(
        guessedNumber > randomSecretNumber ? 'too high' : 'too low'
      );
      score = score - 1;
      scoreElement.textContent = score;
    } else {
      scoreElement.textContent = 0;
      message.textContent = 'You lost the game';
    }
  }
});
resetGameBtn.addEventListener('click', function () {
  score = 20;
  randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('You lost the game');
  bodyElement.style.backgroundColor = '#222';
  randomNumber.textContent = '?';
  highScoreElement.textContent = 0;
  scoreElement.textContent = 20;
  document.querySelector('.guess').value = '';
});
