'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Get current player
const currentPlayer = () =>
  player0El.classList.contains('player--active') ? 0 : 1;

// Starting score
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceEl.src = `img/dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // Check for rolled 1: if ture, switch to next player
  if (dice === 1) {
    currentScore = 0;
    if (currentPlayer() === 0) {
      currentScore0El.textContent = currentScore;
      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');
    } else {
      currentScore1El.textContent = currentScore;
      player1El.classList.remove('player--active');
      player0El.classList.add('player--active');
    }
  } else {
    currentScore += dice;
    if (currentPlayer() === 0) {
      currentScore0El.textContent = currentScore;
    } else {
      currentScore1El.textContent = currentScore;
    }
  }
});
