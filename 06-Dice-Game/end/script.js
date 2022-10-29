'use strict';
const diceElement = document.querySelector('.dice');
const player1Score = document.querySelector('#score--0');
const player2Score = document.getElementById('score--1');
const rollDice = document.querySelector('.btn--roll');
const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');
const player1Panel = document.querySelector('.player--0');
const player2Panel = document.querySelector('.player--1');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');
let currentScore, activePlayer, isPlaying, totalScore
function init(){
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1Panel.classList.remove('player--winner');
  player2Panel.classList.remove('player--winner');
  player1Panel.classList.add('player--active');
  player2Panel.classList.remove('player--active');
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;
  totalScore = [0, 0];
  diceElement.style.display = "none"
}
init()

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Panel.classList.toggle('player--active');
  player2Panel.classList.toggle('player--active');
}

rollDice.addEventListener('click', function () {
  if (isPlaying) {
    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.style.display = 'block';
    diceElement.src = `dice-${randomDiceNumber}.png`;
    if (randomDiceNumber !== 1) {
      currentScore += randomDiceNumber;
      // player1CurrentScore.textContent =  currentScore
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', function () {
  if (isPlaying) {
    //Add current score to total score
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 20) {
      isPlaying = false;
      diceElement.style.display = 'none';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

newGameButton.addEventListener('click', init);


